<template>
  <div class="p-5 rounded-lg border-2 border-solid bg-white">
    <div class="columns-1">
      <div>
        <h3 class="text-[21px] font-bold">Detail Peminjaman</h3>
        <p class="text-[14px] text-[#64748B]">Anda memiliki kontrol penuh untuk mengelola pengaturan akun Anda.</p>
        <div class="border-b-gray-200 border-solid border-[1px] mt-6"></div>
        <div class="py-4 flex justify-between items-center">
          <div class="flex items-center">
            <img
              class="rounded-full"
              src="https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"
              alt=""
              style="height: 88px"
            />
            <div class="pl-4">
              <h5 class="text-[18px] font-bold">Foto Profil Anda</h5>
              <p class="text-[14px] text-[#64748B]">
                PNG atau JPG, lebar dan tinggi tidak lebih besar dari 800px.
              </p>
            </div>
          </div>
          <div class="flex gap-2">
            <Button outlined>Ubah</Button>
            <Button severity="danger" outlined>hapus</Button>
          </div>
        </div>
        <div class="border-b-gray-200 border-solid border-[1px]"></div>
        <div class="mt-4">
          <h3 class="text-[18px] font-bold">Detail Personal</h3>
          <span class="text-[14px] text-[#64748B]">Edit Informasi Akun Anda</span>
          <div class="grid grid-rows-2 grid-flow-col gap-3 mt-5">
            <TextInput label="nama" name="Nama"></TextInput>
            <TextInput label="nama" name="Nama"></TextInput>
            <TextInput label="nama" name="Nama"></TextInput>
          </div>
          <Button class="mt-12">Perbarui Profil</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>