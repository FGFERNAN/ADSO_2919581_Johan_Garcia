import { ResponseApiDelivery } from "../../data/source/remote/models/responseApiDelivery";
import { User } from "../entities/user";
export interface AuthRepository {
    register(user: User): Promise<ResponseApiDelivery>;
}