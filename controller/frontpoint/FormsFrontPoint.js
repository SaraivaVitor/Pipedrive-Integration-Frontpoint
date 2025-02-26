"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("../../services/api"));
var FormsFrontpoint = /** @class */ (function () {
    function FormsFrontpoint() {
    }
    FormsFrontpoint.prototype.Carreira = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, phone, cargo, objPerson, respostaPerson, objDeal, respostaDeal, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, phone = _a.phone, cargo = _a.cargo;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        objPerson = {
                            name: name,
                            email: email,
                            phone: phone,
                            owner_id: "",
                            org_id: "",
                            visible_to: 3,
                            "987eaebd7073b17a262e9c144cf62d770d9b1d1b": cargo
                        };
                        return [4 /*yield*/, api_1.default.post('/persons?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objPerson)];
                    case 2:
                        respostaPerson = (_b.sent()).data;
                        if (!respostaPerson) return [3 /*break*/, 4];
                        objDeal = {
                            title: "FP-Carreira",
                            value: 0,
                            currency: 'BRL',
                            user_id: '1063083',
                            person_id: respostaPerson.data.id,
                            org_id: null,
                            stage_id: '570',
                            status: 'open',
                            expected_close_date: null,
                            probability: null,
                            lost_reason: null,
                            visible_to: '3',
                            add_time: new Date().getHours(),
                        };
                        return [4 /*yield*/, api_1.default.post('/deals?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objDeal)];
                    case 3:
                        respostaDeal = (_b.sent()).data;
                        return [2 /*return*/, res.status(200).json({ Deal: respostaDeal, Person: respostaPerson, message: 'Pessoa encaminhada para o pipedrive!', PERSONID: respostaPerson.data.id })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [2 /*return*/, res.json({ message: error_1 })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FormsFrontpoint.prototype.Linkedin = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, phone, linkedin, objPerson, respostaPerson, objDeal, respostaDeal, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, phone = _a.phone, linkedin = _a.linkedin;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        objPerson = {
                            name: name,
                            email: email,
                            phone: phone,
                            owner_id: "",
                            org_id: "",
                            visible_to: 3,
                            "987eaebd7073b17a262e9c144cf62d770d9b1d1b": linkedin
                        };
                        return [4 /*yield*/, api_1.default.post('/persons?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objPerson)];
                    case 2:
                        respostaPerson = (_b.sent()).data;
                        if (!respostaPerson) return [3 /*break*/, 4];
                        objDeal = {
                            title: "FP-Reestilização Linkedin",
                            value: 0,
                            currency: 'BRL',
                            user_id: '1063083',
                            person_id: respostaPerson.data.id,
                            org_id: null,
                            stage_id: '570',
                            status: 'open',
                            expected_close_date: null,
                            probability: null,
                            lost_reason: null,
                            visible_to: '3',
                            add_time: new Date().getHours(),
                        };
                        return [4 /*yield*/, api_1.default.post('/deals?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objDeal)];
                    case 3:
                        respostaDeal = (_b.sent()).data;
                        return [2 /*return*/, res.status(200).json({ Deal: respostaDeal, Person: respostaPerson, message: 'Pessoa encaminhada para o pipedrive!', PERSONID: respostaPerson.data.id })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [2 /*return*/, res.json({ message: error_2 })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FormsFrontpoint.prototype.Contato = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, phone, mensagem, assunto, objPerson, respostaPerson, objDeal, respostaDeal, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, phone = _a.phone, mensagem = _a.mensagem, assunto = _a.assunto;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        objPerson = {
                            name: name,
                            email: email,
                            phone: phone,
                            owner_id: "",
                            org_id: "",
                            visible_to: 3,
                            "5f02a982c2ba476ee53af395323c163272f4b908": assunto,
                            "5715d1988c8249f076041aa7b9482b55c2f4b64d": mensagem // Endereco 2 - Pode usar pra mensagem
                        };
                        return [4 /*yield*/, api_1.default.post('/persons?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objPerson)];
                    case 2:
                        respostaPerson = (_b.sent()).data;
                        if (!respostaPerson) return [3 /*break*/, 4];
                        objDeal = {
                            title: "FP-Contato",
                            value: 0,
                            currency: 'BRL',
                            user_id: '1063083',
                            person_id: respostaPerson.data.id,
                            org_id: null,
                            stage_id: '570',
                            status: 'open',
                            expected_close_date: null,
                            probability: null,
                            lost_reason: null,
                            visible_to: '3',
                            add_time: new Date().getHours(),
                        };
                        return [4 /*yield*/, api_1.default.post('/deals?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objDeal)];
                    case 3:
                        respostaDeal = (_b.sent()).data;
                        return [2 /*return*/, res.status(200).json({ Deal: respostaDeal, Person: respostaPerson, message: 'Pessoa encaminhada para o pipedrive!', PERSONID: respostaPerson.data.id })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [2 /*return*/, res.json({ message: error_3 })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FormsFrontpoint.prototype.Negocio = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, phone, cargo, objPerson, respostaPerson, objDeal, respostaDeal, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, phone = _a.phone, cargo = _a.cargo;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        objPerson = {
                            name: name,
                            email: email,
                            phone: phone,
                            owner_id: "",
                            org_id: "",
                            visible_to: 3,
                            "987eaebd7073b17a262e9c144cf62d770d9b1d1b": cargo
                        };
                        return [4 /*yield*/, api_1.default.post('/persons?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objPerson)];
                    case 2:
                        respostaPerson = (_b.sent()).data;
                        if (!respostaPerson) return [3 /*break*/, 4];
                        objDeal = {
                            title: "FP-Negócio",
                            value: 0,
                            currency: 'BRL',
                            user_id: '1063083',
                            person_id: respostaPerson.data.id,
                            org_id: null,
                            stage_id: '570',
                            status: 'open',
                            expected_close_date: null,
                            probability: null,
                            lost_reason: null,
                            visible_to: '3',
                            add_time: new Date().getHours(),
                        };
                        return [4 /*yield*/, api_1.default.post('/deals?api_token=8413c3f5faa24d903df4cd63271f59ad1cfe71a7', objDeal)];
                    case 3:
                        respostaDeal = (_b.sent()).data;
                        return [2 /*return*/, res.status(200).json({ Deal: respostaDeal, Person: respostaPerson, message: 'Pessoa encaminhada para o pipedrive!', PERSONID: respostaPerson.data.id })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_4 = _b.sent();
                        console.log(error_4);
                        return [2 /*return*/, res.json({ message: error_4 })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return FormsFrontpoint;
}());
exports.default = new FormsFrontpoint();
