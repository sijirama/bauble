'use client'

import { useEffect, useState } from "react";
import MobileSideBar from "@/components/Layouts/MobileSidebar";
import CreateProjectModal from "@/components/modals/CreateProject";
import CreateTask from "@/components/modals/CreateTask";
import InviteMembersModal from "@/components/modals/InviteMembersModal";
import TaskDetailsModal from "@/components/modals/TaskDetailsModal";

export function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateTask />
            <MobileSideBar />
            <CreateProjectModal />
            <InviteMembersModal />
            <TaskDetailsModal />
        </>
    )

}
