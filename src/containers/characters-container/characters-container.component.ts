import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { Result } from 'src/models/result';
import { CharactersSandbox } from 'src/sandbox/characters.sandbox';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styleUrls: ['./characters-container.component.scss'],
})
export class CharactersContainerComponent implements OnInit, OnDestroy {
  @Input() charactersGetDTO: Result[] = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private charactersSandbox: CharactersSandbox) {}

  ngOnInit(): void {
    this.charactersSandbox.getCharacters();

    this.charactersSandbox.emitPageObs
      .pipe(takeUntil(this.destroy$))
      .subscribe((url) => {
        this.charactersSandbox.getCharacters(url);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onScroll() {
    this.charactersSandbox.info$
      .pipe(takeUntil(this.destroy$), debounceTime(200), take(1))
      .subscribe((info) => {
        if (info.next) {
          this.charactersSandbox.scrollCharacters(info.next);
        }
      });
  }

  getDescription(result: Result): string {
    let pronoum = result.gender.toLowerCase() === 'male' ? 'He' : 'She';
    let possessiveAdjective =
      result.gender.toLowerCase() === 'male' ? 'his' : 'her';
    let name = result.name.split(' ')[0];
    return `<strong>${name}</strong> origin is <strong>${
      result.origin.name
    }</strong> and ${possessiveAdjective} last known location was <strong>${
      result.location.name
    }</strong>. ${pronoum} was first seen in  <strong> episode ${this.getEpisodeNumber(
      result.episode[0]
    )}</strong> and last seen in <strong> episode ${this.getEpisodeNumber(
      result.episode[result.episode.length - 1]
    )}</strong>.`;
  }

  getEpisodeNumber(url: string): number {
    const pathParts = url.split('/');
    return parseInt(pathParts[pathParts.length - 1], 10);
  }
}
