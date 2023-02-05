export interface Item {
    completed_at: Date
    content: string
    id: string
    meta_data?: any
    project_id: string
    section_id?: any
    task_id: string
    user_id: string
}

export interface Project {
    child_order: number
    collapsed: boolean
    color: string
    id: string
    inbox_project: boolean
    is_archived: boolean
    is_deleted: boolean
    is_favorite: boolean
    name: string
    parent_id?: any
    shared: boolean
    sync_id?: any
    view_style: string
}

export interface Projects {
    [key: string]: Project
}

export interface Section {
    added_at: Date
    archived_at?: any
    collapsed: boolean
    id: string
    is_archived: boolean
    is_deleted: boolean
    name: string
    project_id: string
    section_order: number
    sync_id?: any
    user_id: string
}

export interface Sections {
    [key: string]: Section
}

export interface CompleteResponse {
    items: Item[]
    projects: Projects
    sections: Sections
}

export interface FormattedItem {
    completed_at: Date
    content: string
    project_name?: string
}
