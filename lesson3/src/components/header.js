const Header = function () {
  return `

  <header class="bg-blue-500 bg-opacity-75 py-4">
  <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="text-white text-lg font-bold ml-40">
          <img src="./public/img/logo.png" alt="" class="w-16 h-auto">
      </div>

      <div class="header__feature flex items-center grow">

        <!-- Search Form -->
        <form class="flex items-center ml-28">
            <input type="search" class="py-1 px-48 border text-black  " placeholder="">
            <button type="submit" class="bg-blue-600 text-white  py-1 px-4  "> <i class="fa-solid fa-magnifying-glass pr-2 text-sm"></i>Tim kiem</button>
        </form>

        <!-- ĐK, ĐN, Giỏ hàng -->
        <div class="ml-10 user-wapper flex items-center">
        <img src="./icon/user.png" alt="" class="w-8 h-auto">
        <div class="user-status text-xs">
          <div class="user-text text-white">
            <span>Đăng Nhập</span> /
            <span>Đăng Ký</span>
          </div>
          <div class="user-account text-white">
            Tài khoản<i class="fa-solid fa-sort-down pl-1"></i>
          </div>
        </div>
        <!-- Giỏ hàng -->
        <div class="shopping-wapper flex ml-8 text-white">
        <div class="relative">
        <img src="./icon/giohang.png" alt="" class="w-8 h-auto">
          <span
            class="w-5 h-5 rounded-full bg-yellow-400 text-center absolute -right-2 -top-1 leading-5 color-text"
            >0</span
          >
        </div>
        <p class="text-xs pt-4 pl-2">Giỏ hàng</p>
      </div>
      </div>  
    </div>


  </div>
</header>


    `;
};
export default Header;