import classNames from 'classnames';
import { GAME_WORD_LEN, LetterState } from '../constants';

import { useEffect, useState } from 'react';
import css from './GuessRow.module.css';

type Props = {
  guess: string | undefined;
  letterStates: Array<LetterState>;
  shake: boolean;
  jump: boolean;
};

export const GuessRow = ({ guess, letterStates, shake, jump }: Props) => {
  return (
    <div className={classNames('flex gap-2', { [css.shake]: shake })}>
      {Array.from({ length: GAME_WORD_LEN }).map((_, idx) => {
        return (
          <Tile
            key={idx}
            idx={idx}
            letter={guess ? guess[idx] : ''}
            state={letterStates[idx]}
            jump={jump}
          />
        );
      })}
    </div>
  );
};

type TileProps = {
  letter: string | undefined;
  state: LetterState;
  idx: number;
  jump: boolean;
};

export const Tile = ({ letter, state, idx, jump }: TileProps) => {
  const [revealColor, setRevealColor] = useState(false);
  const animationDelay = jump ? idx * 80 : idx * 300;

  useEffect(() => {
    let timeout: number;
    if (state !== 'default') {
      timeout = setTimeout(() => {
        setRevealColor(true);
      }, animationDelay + 300);
    }
    return () => clearTimeout(timeout);
  }, [state]);

  return (
    <div
      style={{
        animationDelay: state === 'default' ? '0ms' : `${animationDelay}ms`,
      }}
      className={classNames(
        'border w-16 h-16 flex justify-center items-center rounded-2xl text-[2.5rem] font-bold',
        {
          'border-gray-500': state === 'default' && !letter,
          [css.hasLetter]: !!letter,
          [css.correct]: state === 'correct' && revealColor,
          [css.wrong]: state === 'wrong' && revealColor,
          [css.wrongPlace]: state === 'wrong-place' && revealColor,
          [css.flip]: state !== 'default',
          [css.jump]: jump,
        }
      )}
    >
      {letter}
    </div>
  );
};
