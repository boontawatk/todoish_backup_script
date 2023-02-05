import dayjs from "dayjs";
import { CompleteResponse, FormattedItem, Item, Projects } from "./type";

export const formatData = (data:CompleteResponse):FormattedItem[]=>{
    const {items,projects,sections} = data
    console.log(sections)
    let formattedItems:FormattedItem[]=[]
    for(let item of items){
        const formatItem = {
            completed_at: dayjs(item.completed_at).format('DD/MM/YYYY HH:mm'),
            content: item.content,
            project_name: projects[item.project_id]?.name,
            section_name: sections[item.section_id]?.name
        }
        formattedItems.push(formatItem)
    }
    return formattedItems
}