const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        });
    }

    //CARA 1
    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1);
        scrollTop();
    }

    const handleNextPage = () => {
        setPage((nextPage) => nextPage + 1);
        scrollTop();
    }


    // CARA 2
    // const handlePrevPage = () => {
    //     setPage(page - 1);
    // }

    // const handleNextPage = () => {
    //     setPage(page + 1);
    // }

    return (
        <div>
            <div className="flex justify-center items-center p-4 gap-4 text-primary text-xl">
                <button className="hover:text-accent transition-all" onClick={handlePrevPage}>Prev</button>
                <span>{page} of {lastPage}</span>
                <button className="hover:text-accent transition-all" onClick={handleNextPage}>Next</button>
            </div>
        </div>
    )
}

export default Pagination;