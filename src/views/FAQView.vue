<script setup></script>

<template>
  <main class="flex-shrink-0">
    <section class="py-5">
      <div class="container px-5 my-5">
        <div class="text-center mb-5">
          <h1 class="fw-bolder">常见问题</h1>
          <p class="lead fw-normal text-muted mb-0">我们能为您提供什么帮助？</p>
        </div>
        <div class="row gx-5">
          <div class="col-xl-8">
            <h2 class="fw-bolder mb-3">账户 &amp; 支付</h2>
            <div class="accordion mb-5" id="accordionExample">
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Issue #1
                  </button>
                </h3>
                <div
                  class="accordion-collapse collapse show"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">编不动了。</div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Issue #2
                  </button>
                </h3>
                <div
                  class="accordion-collapse collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>真</strong>
                    编不动了。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Issue #3
                  </button>
                </h3>
                <div
                  class="accordion-collapse collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>真真</strong>
                    编不动了。
                  </div>
                </div>
              </div>
            </div>
            <h2 class="fw-bolder mb-3">网站问题</h2>
            <div class="accordion mb-5 mb-xl-0" id="accordionExample2">
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne2"
                    aria-expanded="true"
                    aria-controls="collapseOne2"
                  >
                    Issue #1
                  </button>
                </h3>
                <div
                  class="accordion-collapse collapse show"
                  id="collapseOne2"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">编不动了。</div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo2"
                    aria-expanded="false"
                    aria-controls="collapseTwo2"
                  >
                    Issue #2
                  </button>
                </h3>
                <div
                  class="accordion-collapse collapse"
                  id="collapseTwo2"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    <strong>真</strong>
                    编不动了。
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree2"
                    aria-expanded="false"
                    aria-controls="collapseThree2"
                  >
                    Issue #3
                  </button>
                </h3>
                <div
                  class="accordion-collapse collapse"
                  id="collapseThree2"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample2"
                >
                  <div class="accordion-body">
                    <strong>真真</strong>
                    编不动了。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card border-0 bg-light mt-xl-5">
              <div class="card-body p-4 py-lg-5">
                <div class="d-flex align-items-center justify-content-center">
                  <div class="text-center">
                    <div class="h6 fw-bolder">还有更多问题？</div>
                    <p class="text-muted mb-4">
                      联系我们
                      <br />
                      <a href="#!">xxx@xxx.com</a>
                    </p>
                    <div class="h6 fw-bolder">关注我们</div>
                    <a class="fs-5 px-2 link-dark" href="#!"><i class="bi-twitter"></i></a>
                    <a class="fs-5 px-2 link-dark" href="#!"><i class="bi-facebook"></i></a>
                    <a class="fs-5 px-2 link-dark" href="#!"><i class="bi-linkedin"></i></a>
                    <a class="fs-5 px-2 link-dark" href="#!"><i class="bi-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
