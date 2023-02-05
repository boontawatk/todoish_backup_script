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

export interface Sections {}

export interface CompleteResponse {
    items: Item[]
    projects: Projects
    sections: Sections
}

export interface FormattedItem {
    completed_at: string
    content: string
    project_name?: string
}
