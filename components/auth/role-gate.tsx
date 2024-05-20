"use client"

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
    children: React.ReactNode;
    allowdedRole: UserRole;
};

export const RoleGate = ({
    children,
    allowdedRole,
}: RoleGateProps) => {
    const role = useCurrentRole();

    if (role !== allowdedRole) {
        return (
            <FormError message="You do not have permision to view this content!" />
        );
    }


    return (
        <>
            {children}
        </>
    )
} 