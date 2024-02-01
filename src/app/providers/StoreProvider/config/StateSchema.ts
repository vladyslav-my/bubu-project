import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { rtkApi } from "@/shared/api/rtkApi";

// export interface StateSchema {
// 	// [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
// }

// export type StateSchemaKey = keyof StateSchema;

export interface ExtraArgumentType {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}
