function Header() {
    return (
        <header class="flex items-center float-right px-8 md:px-12 py-6 bg-[#E2EFF8] w-full">
            <div class="ml-auto">
                <ul class="flex items-center px-4 space-x-4" >
                    <li>
                        <a href="#!">إتصل بنا</a>
                    </li>
                    <li>
                        <a href="#!">إعرف عنا</a>
                    </li>
                    <li>
                        <a href="#!">خدماتنا</a>
                    </li>
                    <li>
                        <a href="#!">المدونة</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="137" height="38" viewBox="0 0 137 38">
                        <text id="Takeit_Easy" data-name="Takeit Easy" transform="translate(137 31)" fill="#026451" font-size="29" font-family="SegoeUI, Segoe UI"><tspan x="-136.83" y="0">Takeit Easy</tspan></text>
                    </svg>
                </a>                  
            </div>
        </header>
    )
}

export default Header
