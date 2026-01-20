const HeaderMenu = ({ title }) => {
    return (
        <div>
            <div className="p-8 text-center">
                <h3 className="text-primary font-semibold text-2xl">{title}</h3>
            </div>
        </div>
    )
}

export default HeaderMenu;