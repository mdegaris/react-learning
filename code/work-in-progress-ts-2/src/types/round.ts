type RoundNumber =
  | `${number}`
  | `${number}${number}`
  | `${number}${number}${number}`
  | `${number}${number}${number}${number}`;

type RoundLetter =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

export type Round = `R${RoundNumber}` | `R${RoundNumber}${RoundLetter}`;
