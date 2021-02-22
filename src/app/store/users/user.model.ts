export interface UserDto {
    id?: number | null;
    name?: string | null;
    lastName?: string | null;
    email?: string | null;
    password?: string | null;
    mustChangePassword?: boolean | null;
    technicalConsent?: boolean | null;
    marketingConsent?: boolean | null;
    profilingConsent?: boolean | null;
    isAdmin?: boolean | null;
    resetPasswordToken?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    lastLoginAt?: Date | null;
}
