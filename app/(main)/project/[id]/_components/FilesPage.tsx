"use client"
import { cn } from '@/lib/utils'
import { Project } from '@prisma/client'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useModal } from "@/hooks/useModalStore";
import { getProjectFiles } from '@/actions/getProjectFiles'
import FileCard from '@/components/custom/FileCard'
interface FileBoardProps extends HTMLAttributes<HTMLDivElement> {
    project: Project
}

export const FilePage = ({ project, className, ...props }: FileBoardProps) => {

    const { onOpen } = useModal()
    const [files, setFIles] = useState<Awaited<ReturnType<typeof getProjectFiles>>>(null)

    useEffect(() => {
        const fetch = async () => {
            const files = await getProjectFiles({ projectId: project.id })
            setFIles(files)
        }
        fetch()
    }, [])

    return (
        <section {...props} className={cn("", className)}>
            <p className='text-lg font-semibold -tracking-wider'>Project Files</p>
            <Button className="text-sm" onClick={() => onOpen("addFile", { projectId: project?.id })}>Add a file</Button>

            <div className='my-4 flex items-center gap-3'>
                {
                    files?.map(file => (
                        <FileCard file={file} />
                    ))
                }

            </div>
        </section>
    )
}
