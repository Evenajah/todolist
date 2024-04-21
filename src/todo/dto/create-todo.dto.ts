import { IsString, Matches } from 'class-validator';
import { REGEX } from 'src/shared/regex';

export class CreateTodoDto {
  @IsString()
  todoDesc: string;

  @Matches(REGEX.dateRegex, {
    message: 'Date must be in the format dd/MM/YYYY',
  })
  date: string;

  @Matches(REGEX.timeRegex, {
    message: 'Start time must be in the format HH:mm',
  })
  startTime: string;

  @Matches(REGEX.timeRegex, {
    message: 'Start time must be in the format HH:mm',
  })
  endTime: string;
}
