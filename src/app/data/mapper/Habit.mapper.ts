import { Habit } from "../domain/Habit";
import { HabitResponseDto } from "../dto/HabitResponse.dto";


export class HabitMapper {
    public static fromHabitResponseDto(dto: HabitResponseDto): Habit {
        return new Habit(
            dto.id,
            dto.userID,
            dto.pillarID,
            dto.name,
            dto.description,
            dto.active,
            new Date(dto.createdAt)
        );
    }
}