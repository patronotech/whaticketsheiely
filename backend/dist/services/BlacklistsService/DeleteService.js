"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Blacklist_1 = __importDefault(require("../../models/Blacklists"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const DeleteService = async (id) => {

    const blacklist = await Blacklist_1.default.findOne({
        where: { id }
    });
    if (!blacklist) {
        throw new AppError_1.default("ERR_NO_TAG_FOUND", 404);
    }
    await blacklist.destroy();
};
exports.default = DeleteService;
