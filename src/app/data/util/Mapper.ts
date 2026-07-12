import { ApiResponseDto } from "../dto/rest/ApiResponse.dto";
import { SingleItemDto } from "../dto/rest/SingleItem.dto";


export class Mapper {
    public static mapSingleItem<T, J>(res: ApiResponseDto<SingleItemDto<T>>, mapFunc: (dto: T) => J): J {
        return mapFunc(res.data.items[0]);
    }
}