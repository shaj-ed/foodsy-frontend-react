import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Search } from "lucide-react"
import useCategoryStore from "../store/category.store"
import { ChangeEvent } from "react"
import CategoryForm from "./CategoryForm"

const CategoryHeader = () => {
    const {searchTerm, setSearchTerm} = useCategoryStore()

    const onHandleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

    return (
        <div className="flex items-center gap-6 justify-between flex-wrap">
            <InputGroup className="w-100 max-w-2xl">
                <InputGroupInput placeholder="Search..." value={searchTerm} onChange={onHandleSearch} />
                <InputGroupAddon>
                <Search />
                </InputGroupAddon>
            </InputGroup>

            <CategoryForm/>
        </div>
    )
}

export default CategoryHeader