import dayjs from "dayjs";
import { FormattedItem, Item, Projects } from "./type";

export const formatData = (items:Item[],projects:Projects):FormattedItem[]=>{
    let formattedItems:FormattedItem[]=[]
    for(let item of items){
        const formatItem = {
            completed_at: dayjs(item.completed_at).format('DD/MM/YYYY HH:mm'),
            content: item.content,
            project_name: projects[item.project_id].name
        }
        formattedItems.push(formatItem)
    }
    return formattedItems
}