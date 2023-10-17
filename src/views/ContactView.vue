<script setup></script>

<template>
  <main class="flex-shrink-0">
    <section class="py-5">
      <div class="container px-5">
        <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
          <div class="text-center mb-5">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i class="bi bi-envelope"></i>
            </div>
            <h1 class="fw-bolder">联系我们</h1>
            <p class="lead fw-normal text-muted mb-0">我们很想听到您的反馈</p>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-8 col-xl-6">
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="请输入姓名..."
                  data-sb-validations="required"
                />
                <label for="name">姓名</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="请输入电子邮件..."
                  data-sb-validations="required,email"
                />
                <label for="email">电子邮件</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="请输入电话号码..."
                  data-sb-validations="required"
                />
                <label for="phone">电话号码</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="请输入反馈..."
                  style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
                <label for="message">反馈</label>
              </div>
              <div class="d-grid">
                <button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">
                  提交
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
          <div class="col">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i class="bi bi-chat-dots"></i>
            </div>
            <div class="h5 mb-2">与我们聊天</div>
            <p class="text-muted mb-0">与我们的客服实时聊天。</p>
          </div>
          <div class="col">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i class="bi bi-people"></i>
            </div>
            <div class="h5">向社区提问</div>
            <p class="text-muted mb-0">浏览我们的社区论坛，与其他用户交流。</p>
          </div>
          <div class="col">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i class="bi bi-question-circle"></i>
            </div>
            <div class="h5">服务中心</div>
            <p class="text-muted mb-0">浏览常见问题和支持，查找解决方案。</p>
          </div>
          <div class="col">
            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i class="bi bi-telephone"></i>
            </div>
            <div class="h5">致电我们</div>
            <p class="text-muted mb-0">请在正常工作时间致电xxx。</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
