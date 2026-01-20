const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        });
    }

    //CARA 1
    const handlePrevPage = () => {
        if (page == 1) {
            return;
        } else {
            setPage((prevPage) => prevPage - 1);
            scrollTop();
        }
    }

    const handleNextPage = () => {
        if (page > lastPage) {
            return;
        } else {
            setPage((prevPage) => prevPage + 1);
            scrollTop();
        }
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
                {page == 1 ? (null) : (
                    <button className="hover:text-accent transition-all" onClick={handlePrevPage}>Prev</button>
                )}
                <span>{page} of {lastPage}</span>
                {page >= lastPage ? (null) : (
                    <button className="hover:text-accent transition-all" onClick={handleNextPage}>Next</button>
                )}
            </div>
        </div>
    )
}

export default Pagination;