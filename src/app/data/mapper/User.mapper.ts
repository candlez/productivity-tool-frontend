import { User } from "../domain/User";
import { UserResponseDto } from "../dto/UserResponse.dto";


export class UserMapper {
    public static fromUserResponseDto(dto: UserResponseDto): User {
        return new User(
            dto.id,
            dto.email,
            dto.firstName,
            dto.lastName
        );
    }
}