document.getElementById('navigation').innerHTML =
`
<div class="navigation fixed-top py-3 d-md-block d-sm-none d-none">
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col">
        <p class="mx-4 mb-0"><a href="./index.html">MADELEINE CHAPPELL</a></p>
      </div>
      <div class="col-md-1">
        <a href="./index.html" class='m-0'><img src="./img/logo.png" class="mx-auto d-block" width="50"></a>
      </div>
      <div class="col-md d-flex justify-content-end">
        <div class="nav">
          <a href="./index.html" class="mx-sm-2 mx-lg-4 my-3">HOME</a>
          <a href="./about.html" class="mx-sm-2 mx-lg-4 my-3">ABOUT</a>
          <a href="./work.html" class="mx-sm-2 mx-lg-4 my-3">WORK</a>
          <a href="./contact.html" class="mx-sm-2 mx-lg-4 my-3">CONTACT</a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="navigation fixed-top py-3 d-md-none d-sm-block">
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col d-flex align-items-center">
        <a href="./index.html" class='m-0'><img src="./img/logo.png" class="mx-auto d-block" width="30"></a>
      </div>
      <div class="col d-flex justify-content-end">
        <div class="dropdown show">
          <a class="dropdown-toggle" href="" id="dropdownMenuLink" data-toggle="dropdown"><i class="fas fa-bars"></i></a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="./index.html">HOME</a>
            <a class="dropdown-item" href="./about.html">ABOUT</a>
            <a class="dropdown-item" href="./work.html">WORK</a>
            <a class="dropdown-item" href="./contact.html">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
