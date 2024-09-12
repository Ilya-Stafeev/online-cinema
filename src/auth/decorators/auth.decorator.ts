import { applyDecorators, UseGuards } from "@nestjs/common";
import { TypeRole } from "../auth.interface";
import { JwtAuthGuards } from "../guards/jwt.guards";
import { OnlyAdminGuard } from "../guards/admin.guards";

export const Auth = (role: TypeRole = 'user') => 
    applyDecorators(
        role === "admin"
            ? UseGuards(JwtAuthGuards, OnlyAdminGuard)
            : UseGuards(JwtAuthGuards)
    )