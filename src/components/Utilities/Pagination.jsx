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

    const handlefirstPage = () => {
        setPage(1);
    }

    const handleLastPage = () => {
        setPage(lastPage);
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
                    <>
                        <button className=" text-primary p-1 rounded hover:scale-105 transition-all cursor-pointer" onClick={handlefirstPage}>Go to first page</button>
                        <span>|</span>
                    </>
                )}


                {page == 1 ? (null) : (
                    <button className="hover:text-accent transition-all cursor-pointer" onClick={handlePrevPage}>Prev</button>
                )}

                <span>{page} of {lastPage}</span>

                {page >= lastPage ? (null) : (
                    <button className="hover:text-accent transition-all cursor-pointer" onClick={handleNextPage}>Next</button>
                )}


                {page == lastPage ? (null) : (
                    <>
                        <span className="cursor-default">|</span>
                        <button className=" text-primary p-1 rounded hover:scale-105 transition-all cursor-pointer" onClick={handleLastPage}> Go to last page</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Pagination;