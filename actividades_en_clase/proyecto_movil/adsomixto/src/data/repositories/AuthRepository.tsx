import { User } from "../../domain/entities/user";
import { AuthRepository } from '../../domain/repositories/authRepository';
import { ApiDelivery } from "../source/remote/api/ApiDelivery";
import { AxiosError } from "axios";
import { ResponseApiDelivery } from "../source/remote/models/responseApiDelivery";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User) {
        try {
            const response = await
                ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
            return Promise.resolve(response.data);
        } catch (error) {
           let e = (error as AxiosError);
           console.log('Error ' + JSON.stringify(e.response?.data));
           const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
           return Promise.resolve(apiError);
        }
    }
}