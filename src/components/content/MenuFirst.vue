<template>
  <div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <Navbar />
      <Sidebar />
      
      <div class="content-wrapper mt-4">
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <section class="col-lg-12">
                <div class="card">

                  <!-- Card Header -->
                  <div class="card-header bg-success">
                    <h3 class="card-title">
                      <i class="fas fa-chart-pie mr-1"></i>
                      Title Menu First
                    </h3>
                  </div>
                  <!-- End Card Header -->
                  
                  <!-- Card Body -->
                  <div class="card-body">
                    <h3>Menu First</h3>
                  </div>
                  <!-- End Card Body -->

                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/section/Sidebar'
  import Navbar from '@/components/section/Navbar'
  import Footer from '@/components/section/Footer'
  export default {
    components: {
      Sidebar,
      Navbar,
      Footer
    }
  }

</script>

<style>

</style>
