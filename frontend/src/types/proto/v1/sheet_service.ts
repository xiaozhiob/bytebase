/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../google/protobuf/field_mask";
import { Timestamp } from "../google/protobuf/timestamp";
import { DatabaseConfig } from "./database_service";

export const protobufPackage = "bytebase.v1";

export interface CreateSheetRequest {
  /**
   * The parent resource where this sheet will be created.
   * Format: projects/{project}
   */
  parent: string;
  /** The sheet to create. */
  sheet: Sheet | undefined;
}

export interface GetSheetRequest {
  /**
   * The name of the sheet to retrieve.
   * Format: projects/{project}/sheets/{sheet}
   */
  name: string;
  /** By default, the content of the sheet is cut off, set the `raw` to true to retrieve the full content. */
  raw: boolean;
}

export interface UpdateSheetRequest {
  /**
   * The sheet to update.
   *
   * The sheet's `name` field is used to identify the sheet to update.
   * Format: projects/{project}/sheets/{sheet}
   */
  sheet:
    | Sheet
    | undefined;
  /**
   * The list of fields to be updated.
   * Fields are specified relative to the sheet.
   * (e.g. `title`, `statement`; *not* `sheet.title` or `sheet.statement`)
   * Only support update the following fields for now:
   * - `title`
   * - `statement`
   */
  updateMask: string[] | undefined;
}

export interface Sheet {
  /**
   * The name of the sheet resource, generated by the server.
   * Canonical parent is project.
   * Format: projects/{project}/sheets/{sheet}
   */
  name: string;
  /**
   * The database resource name.
   * Format: instances/{instance}/databases/{database}
   * If the database parent doesn't exist, the database field is empty.
   */
  database: string;
  /** The title of the sheet. */
  title: string;
  /**
   * The creator of the Sheet.
   * Format: users/{email}
   */
  creator: string;
  /** The create time of the sheet. */
  createTime:
    | Date
    | undefined;
  /** The last update time of the sheet. */
  updateTime:
    | Date
    | undefined;
  /**
   * The content of the sheet.
   * By default, it will be cut off, if it doesn't match the `content_size`, you can
   * set the `raw` to true in GetSheet request to retrieve the full content.
   */
  content: Uint8Array;
  /** content_size is the full size of the content, may not match the size of the `content` field. */
  contentSize: Long;
  payload: SheetPayload | undefined;
}

export interface SheetPayload {
  type: SheetPayload_Type;
  /** The snapshot of the database config when creating the sheet, be used to compare with the baseline_database_config and apply the diff to the database. */
  databaseConfig:
    | DatabaseConfig
    | undefined;
  /** The snapshot of the baseline database config when creating the sheet. */
  baselineDatabaseConfig: DatabaseConfig | undefined;
}

/** Type of the SheetPayload. */
export enum SheetPayload_Type {
  TYPE_UNSPECIFIED = 0,
  SCHEMA_DESIGN = 1,
  UNRECOGNIZED = -1,
}

export function sheetPayload_TypeFromJSON(object: any): SheetPayload_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return SheetPayload_Type.TYPE_UNSPECIFIED;
    case 1:
    case "SCHEMA_DESIGN":
      return SheetPayload_Type.SCHEMA_DESIGN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SheetPayload_Type.UNRECOGNIZED;
  }
}

export function sheetPayload_TypeToJSON(object: SheetPayload_Type): string {
  switch (object) {
    case SheetPayload_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case SheetPayload_Type.SCHEMA_DESIGN:
      return "SCHEMA_DESIGN";
    case SheetPayload_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseCreateSheetRequest(): CreateSheetRequest {
  return { parent: "", sheet: undefined };
}

export const CreateSheetRequest = {
  encode(message: CreateSheetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.sheet !== undefined) {
      Sheet.encode(message.sheet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateSheetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSheetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sheet = Sheet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateSheetRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      sheet: isSet(object.sheet) ? Sheet.fromJSON(object.sheet) : undefined,
    };
  },

  toJSON(message: CreateSheetRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.sheet !== undefined) {
      obj.sheet = Sheet.toJSON(message.sheet);
    }
    return obj;
  },

  create(base?: DeepPartial<CreateSheetRequest>): CreateSheetRequest {
    return CreateSheetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateSheetRequest>): CreateSheetRequest {
    const message = createBaseCreateSheetRequest();
    message.parent = object.parent ?? "";
    message.sheet = (object.sheet !== undefined && object.sheet !== null) ? Sheet.fromPartial(object.sheet) : undefined;
    return message;
  },
};

function createBaseGetSheetRequest(): GetSheetRequest {
  return { name: "", raw: false };
}

export const GetSheetRequest = {
  encode(message: GetSheetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.raw === true) {
      writer.uint32(16).bool(message.raw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSheetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSheetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.raw = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSheetRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      raw: isSet(object.raw) ? globalThis.Boolean(object.raw) : false,
    };
  },

  toJSON(message: GetSheetRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.raw === true) {
      obj.raw = message.raw;
    }
    return obj;
  },

  create(base?: DeepPartial<GetSheetRequest>): GetSheetRequest {
    return GetSheetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetSheetRequest>): GetSheetRequest {
    const message = createBaseGetSheetRequest();
    message.name = object.name ?? "";
    message.raw = object.raw ?? false;
    return message;
  },
};

function createBaseUpdateSheetRequest(): UpdateSheetRequest {
  return { sheet: undefined, updateMask: undefined };
}

export const UpdateSheetRequest = {
  encode(message: UpdateSheetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sheet !== undefined) {
      Sheet.encode(message.sheet, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateSheetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSheetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sheet = Sheet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateSheetRequest {
    return {
      sheet: isSet(object.sheet) ? Sheet.fromJSON(object.sheet) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
    };
  },

  toJSON(message: UpdateSheetRequest): unknown {
    const obj: any = {};
    if (message.sheet !== undefined) {
      obj.sheet = Sheet.toJSON(message.sheet);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateSheetRequest>): UpdateSheetRequest {
    return UpdateSheetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateSheetRequest>): UpdateSheetRequest {
    const message = createBaseUpdateSheetRequest();
    message.sheet = (object.sheet !== undefined && object.sheet !== null) ? Sheet.fromPartial(object.sheet) : undefined;
    message.updateMask = object.updateMask ?? undefined;
    return message;
  },
};

function createBaseSheet(): Sheet {
  return {
    name: "",
    database: "",
    title: "",
    creator: "",
    createTime: undefined,
    updateTime: undefined,
    content: new Uint8Array(0),
    contentSize: Long.ZERO,
    payload: undefined,
  };
}

export const Sheet = {
  encode(message: Sheet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.database !== "") {
      writer.uint32(18).string(message.database);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.createTime !== undefined) {
      Timestamp.encode(toTimestamp(message.createTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.updateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(50).fork()).ldelim();
    }
    if (message.content.length !== 0) {
      writer.uint32(58).bytes(message.content);
    }
    if (!message.contentSize.isZero()) {
      writer.uint32(64).int64(message.contentSize);
    }
    if (message.payload !== undefined) {
      SheetPayload.encode(message.payload, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sheet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSheet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.database = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.content = reader.bytes();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.contentSize = reader.int64() as Long;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.payload = SheetPayload.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sheet {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      database: isSet(object.database) ? globalThis.String(object.database) : "",
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array(0),
      contentSize: isSet(object.contentSize) ? Long.fromValue(object.contentSize) : Long.ZERO,
      payload: isSet(object.payload) ? SheetPayload.fromJSON(object.payload) : undefined,
    };
  },

  toJSON(message: Sheet): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.database !== "") {
      obj.database = message.database;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.createTime !== undefined) {
      obj.createTime = message.createTime.toISOString();
    }
    if (message.updateTime !== undefined) {
      obj.updateTime = message.updateTime.toISOString();
    }
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    if (!message.contentSize.isZero()) {
      obj.contentSize = (message.contentSize || Long.ZERO).toString();
    }
    if (message.payload !== undefined) {
      obj.payload = SheetPayload.toJSON(message.payload);
    }
    return obj;
  },

  create(base?: DeepPartial<Sheet>): Sheet {
    return Sheet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Sheet>): Sheet {
    const message = createBaseSheet();
    message.name = object.name ?? "";
    message.database = object.database ?? "";
    message.title = object.title ?? "";
    message.creator = object.creator ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.content = object.content ?? new Uint8Array(0);
    message.contentSize = (object.contentSize !== undefined && object.contentSize !== null)
      ? Long.fromValue(object.contentSize)
      : Long.ZERO;
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? SheetPayload.fromPartial(object.payload)
      : undefined;
    return message;
  },
};

function createBaseSheetPayload(): SheetPayload {
  return { type: 0, databaseConfig: undefined, baselineDatabaseConfig: undefined };
}

export const SheetPayload = {
  encode(message: SheetPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.databaseConfig !== undefined) {
      DatabaseConfig.encode(message.databaseConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.baselineDatabaseConfig !== undefined) {
      DatabaseConfig.encode(message.baselineDatabaseConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SheetPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSheetPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.databaseConfig = DatabaseConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.baselineDatabaseConfig = DatabaseConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SheetPayload {
    return {
      type: isSet(object.type) ? sheetPayload_TypeFromJSON(object.type) : 0,
      databaseConfig: isSet(object.databaseConfig) ? DatabaseConfig.fromJSON(object.databaseConfig) : undefined,
      baselineDatabaseConfig: isSet(object.baselineDatabaseConfig)
        ? DatabaseConfig.fromJSON(object.baselineDatabaseConfig)
        : undefined,
    };
  },

  toJSON(message: SheetPayload): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = sheetPayload_TypeToJSON(message.type);
    }
    if (message.databaseConfig !== undefined) {
      obj.databaseConfig = DatabaseConfig.toJSON(message.databaseConfig);
    }
    if (message.baselineDatabaseConfig !== undefined) {
      obj.baselineDatabaseConfig = DatabaseConfig.toJSON(message.baselineDatabaseConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<SheetPayload>): SheetPayload {
    return SheetPayload.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SheetPayload>): SheetPayload {
    const message = createBaseSheetPayload();
    message.type = object.type ?? 0;
    message.databaseConfig = (object.databaseConfig !== undefined && object.databaseConfig !== null)
      ? DatabaseConfig.fromPartial(object.databaseConfig)
      : undefined;
    message.baselineDatabaseConfig =
      (object.baselineDatabaseConfig !== undefined && object.baselineDatabaseConfig !== null)
        ? DatabaseConfig.fromPartial(object.baselineDatabaseConfig)
        : undefined;
    return message;
  },
};

export type SheetServiceDefinition = typeof SheetServiceDefinition;
export const SheetServiceDefinition = {
  name: "SheetService",
  fullName: "bytebase.v1.SheetService",
  methods: {
    createSheet: {
      name: "CreateSheet",
      requestType: CreateSheetRequest,
      requestStream: false,
      responseType: Sheet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([12, 112, 97, 114, 101, 110, 116, 44, 115, 104, 101, 101, 116])],
          578365826: [
            new Uint8Array([
              39,
              58,
              5,
              115,
              104,
              101,
              101,
              116,
              34,
              30,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              115,
              104,
              101,
              101,
              116,
              115,
            ]),
          ],
        },
      },
    },
    getSheet: {
      name: "GetSheet",
      requestType: GetSheetRequest,
      requestStream: false,
      responseType: Sheet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          578365826: [
            new Uint8Array([
              32,
              18,
              30,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              115,
              104,
              101,
              101,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    updateSheet: {
      name: "UpdateSheet",
      requestType: UpdateSheetRequest,
      requestStream: false,
      responseType: Sheet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([17, 115, 104, 101, 101, 116, 44, 117, 112, 100, 97, 116, 101, 95, 109, 97, 115, 107])],
          578365826: [
            new Uint8Array([
              45,
              58,
              5,
              115,
              104,
              101,
              101,
              116,
              50,
              36,
              47,
              118,
              49,
              47,
              123,
              115,
              104,
              101,
              101,
              116,
              46,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              115,
              104,
              101,
              101,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
