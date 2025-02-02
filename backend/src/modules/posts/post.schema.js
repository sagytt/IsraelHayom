"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = exports.Post = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Post = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = mongoose_2.Document;
    var _postId_decorators;
    var _postId_initializers = [];
    var _postId_extraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _url_extraInitializers = [];
    var _writerId_decorators;
    var _writerId_initializers = [];
    var _writerId_extraInitializers = [];
    var Post = _classThis = /** @class */ (function (_super) {
        __extends(Post_1, _super);
        function Post_1() {
            var _this = _super.call(this) || this;
            _this.postId = __runInitializers(_this, _postId_initializers, void 0);
            _this.title = (__runInitializers(_this, _postId_extraInitializers), __runInitializers(_this, _title_initializers, void 0));
            _this.createdAt = (__runInitializers(_this, _title_extraInitializers), __runInitializers(_this, _createdAt_initializers, void 0));
            _this.url = (__runInitializers(_this, _createdAt_extraInitializers), __runInitializers(_this, _url_initializers, void 0));
            _this.writerId = (__runInitializers(_this, _url_extraInitializers), __runInitializers(_this, _writerId_initializers, void 0)); // Add the non-null assertion operator
            __runInitializers(_this, _writerId_extraInitializers);
            _this.postId = 0; // Default value
            _this.title = ''; // Default value
            _this.createdAt = new Date(); // Default value
            _this.url = ''; // Default value
            return _this;
        }
        return Post_1;
    }(_classSuper));
    __setFunctionName(_classThis, "Post");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _postId_decorators = [(0, mongoose_1.Prop)({ required: true, type: Number })];
        _title_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _createdAt_decorators = [(0, mongoose_1.Prop)({ required: true, type: Date })];
        _url_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _writerId_decorators = [(0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.ObjectId, ref: 'Writer' })];
        __esDecorate(null, null, _postId_decorators, { kind: "field", name: "postId", static: false, private: false, access: { has: function (obj) { return "postId" in obj; }, get: function (obj) { return obj.postId; }, set: function (obj, value) { obj.postId = value; } }, metadata: _metadata }, _postId_initializers, _postId_extraInitializers);
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
        __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
        __esDecorate(null, null, _writerId_decorators, { kind: "field", name: "writerId", static: false, private: false, access: { has: function (obj) { return "writerId" in obj; }, get: function (obj) { return obj.writerId; }, set: function (obj, value) { obj.writerId = value; } }, metadata: _metadata }, _writerId_initializers, _writerId_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Post = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Post = _classThis;
}();
exports.Post = Post;
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
