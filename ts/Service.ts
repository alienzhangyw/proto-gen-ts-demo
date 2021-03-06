/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * source: Service.proto
 * git: https://github.com/thesayyn/protoc-gen-ts
 * buymeacoffee: https://www.buymeacoffee.com/thesayyn
 *  */
import * as dependency_1 from "./User";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace Config {
    export class QueryUserRequest extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
            }
        }
        get id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            const data: {
                id?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(1, this.id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryUserRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryUserRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryUserRequest {
            return QueryUserRequest.deserialize(bytes);
        }
    }
    export class UserResponse extends pb_1.Message {
        constructor(data?: any[] | {
            userInfo?: dependency_1.UserInfo;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("userInfo" in data && data.userInfo != undefined) {
                    this.userInfo = data.userInfo;
                }
            }
        }
        get userInfo() {
            return pb_1.Message.getWrapperField(this, dependency_1.UserInfo, 1) as dependency_1.UserInfo;
        }
        set userInfo(value: dependency_1.UserInfo) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        toObject() {
            const data: {
                userInfo?: ReturnType<typeof dependency_1.UserInfo.prototype.toObject>;
            } = {};
            if (this.userInfo != null) {
                data.userInfo = this.userInfo.toObject();
            }
            return data;
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.userInfo !== undefined)
                writer.writeMessage(1, this.userInfo, () => this.userInfo.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UserResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new UserResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.userInfo, () => message.userInfo = dependency_1.UserInfo.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): UserResponse {
            return UserResponse.deserialize(bytes);
        }
    }
    export interface IConfigServiceService extends grpc_1.ServiceDefinition<grpc_1.UntypedServiceImplementation> {
        GetUser: grpc_1.MethodDefinition<QueryUserRequest, UserResponse>;
    }
    export interface IConfigServiceServer extends grpc_1.UntypedServiceImplementation {
        GetUser: grpc_1.handleUnaryCall<QueryUserRequest, UserResponse>;
    }
    export const ConfigService = {
        GetUser: {
            path: "/Config.ConfigService/GetUser",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: QueryUserRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => QueryUserRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: UserResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => UserResponse.deserialize(new Uint8Array(bytes))
        }
    };
    export class ConfigServiceClient extends grpc_1.makeGenericClientConstructor(ConfigService, "ConfigService", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options)
        }
    }
}
