import { useCategoryList } from "../hooks/category.query"
import CategoryCard from "./CategoryCard"

const CategoryList = () => {
    const {data, isLoading} = useCategoryList()

    if(isLoading) return <p>Loading..</p>

    if(!data) return <p>No category found</p>

    return (
        <section className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {
                data.map(item => <CategoryCard key={item.id} category={item} />)
            }
        </section>
    )
}

export default CategoryList