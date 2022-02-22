"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.songs.Comment', null, global);
goog.exportSymbol('proto.songs.Song', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.songs.Song = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.songs.Song, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.songs.Song.displayName = 'proto.songs.Song';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.songs.Song.prototype.toObject = function (opt_includeInstance) {
        return proto.songs.Song.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.songs.Song} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.songs.Song.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, 0),
            title: jspb.Message.getFieldWithDefault(msg, 2, ""),
            artist: jspb.Message.getFieldWithDefault(msg, 3, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.songs.Song}
 */
proto.songs.Song.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.songs.Song;
    return proto.songs.Song.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.songs.Song} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.songs.Song}
 */
proto.songs.Song.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setId(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setTitle(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setArtist(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.songs.Song.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.songs.Song.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.songs.Song} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.songs.Song.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getTitle();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getArtist();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
};
/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.songs.Song.prototype.getId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {number} value */
proto.songs.Song.prototype.setId = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional string title = 2;
 * @return {string}
 */
proto.songs.Song.prototype.getTitle = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.songs.Song.prototype.setTitle = function (value) {
    jspb.Message.setField(this, 2, value);
};
/**
 * optional string artist = 3;
 * @return {string}
 */
proto.songs.Song.prototype.getArtist = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.songs.Song.prototype.setArtist = function (value) {
    jspb.Message.setField(this, 3, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.songs.Comment = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.songs.Comment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.songs.Comment.displayName = 'proto.songs.Comment';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.songs.Comment.prototype.toObject = function (opt_includeInstance) {
        return proto.songs.Comment.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.songs.Comment} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.songs.Comment.toObject = function (includeInstance, msg) {
        var f, obj = {
            songId: jspb.Message.getFieldWithDefault(msg, 1, 0),
            username: jspb.Message.getFieldWithDefault(msg, 2, ""),
            body: jspb.Message.getFieldWithDefault(msg, 3, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.songs.Comment}
 */
proto.songs.Comment.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.songs.Comment;
    return proto.songs.Comment.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.songs.Comment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.songs.Comment}
 */
proto.songs.Comment.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setSongId(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setUsername(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setBody(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.songs.Comment.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.songs.Comment.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.songs.Comment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.songs.Comment.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSongId();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getUsername();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getBody();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
};
/**
 * optional int32 song_id = 1;
 * @return {number}
 */
proto.songs.Comment.prototype.getSongId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};
/** @param {number} value */
proto.songs.Comment.prototype.setSongId = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional string username = 2;
 * @return {string}
 */
proto.songs.Comment.prototype.getUsername = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};
/** @param {string} value */
proto.songs.Comment.prototype.setUsername = function (value) {
    jspb.Message.setField(this, 2, value);
};
/**
 * optional string body = 3;
 * @return {string}
 */
proto.songs.Comment.prototype.getBody = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.songs.Comment.prototype.setBody = function (value) {
    jspb.Message.setField(this, 3, value);
};
goog.object.extend(exports, proto.songs);
//# sourceMappingURL=songs_pb.js.map