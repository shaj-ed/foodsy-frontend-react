import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CategoryListResponse } from "../types/category.type"
import { Button } from "@/components/ui/button"
import { PenBox, Trash } from "lucide-react"
import useCategoryStore from "../store/category.store"
import { getCategoryById } from "../api/category.api"
import { toast } from "sonner"
import { useDeleteCategory } from "../hooks/category.query"

type CategoryCardProps = {
    category: CategoryListResponse
}

const CategoryCard = ({category}: CategoryCardProps) => {
    const {setOpenModal, setSelectedCategory} = useCategoryStore()
    const {mutateAsync: deleteCategory} = useDeleteCategory()
    const {id, categoryName, description, image} = category

    const handleEdit = async () => {
        toast.loading("Processing..")
        const data = await getCategoryById(id)
        setSelectedCategory(data)
        setOpenModal(true)
        toast.dismiss()
    }

    const handleDelete = async () => {
        toast.loading("Processing..")
        await deleteCategory(id);
        toast.dismiss()
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {categoryName}
                </CardTitle>
            </CardHeader>
           
            <CardContent>
                 <CardDescription>
                {description}
            </CardDescription>
                <div className="w-full h-[180px] overflow-hidden rounded-xl mt-5">
                    <img src={`data:image/jpeg;base64,${image}`} className="w-full h-[180px] object-cover" alt={categoryName} />
                </div>
            </CardContent>

            <CardFooter>
                <Button variant="outline" className="me-2" onClick={handleDelete}>
                    <Trash className="text-red-400" />
                </Button>
                <Button onClick={handleEdit}>
                    <PenBox/>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CategoryCard