describe('empty spec', () => {
  it('Menambahkan data kamar', () => {
    cy.visit('http://localhost/Tugas_Besar_Hotel/login.php')
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.get('button[class="btn btn-primary btn-sm btn-block"]').click()
    cy.wait(5000)
    cy.contains('Data Kamar').click()
    // MENAMBAHKAN DATA
    cy.contains('Tambah Data').click()
    cy.get('input[name="namaKamar"]').type('Family Room')
    cy.get('input[name="hargaKamar"]').type('3000000')
    cy.get('input[name="ukuranKamar"]').type('40')
    cy.get('input[name="kapasitasKamar"]').type('3')
    cy.wait(5000)
    cy.contains('SIMPAN').click()
    cy.wait(8000)
    
    // MENAMBAHKAN DATA DENGAN TYPE HARGA KAMAR YANG SALAH
    cy.contains('Tambah Data').click()
    cy.get('input[name="namaKamar"]').type('Deluxe Room')
    cy.get('input[name="hargaKamar"]').type('2jt')
    cy.get('input[name="ukuranKamar"]').type('35')
    cy.get('input[name="kapasitasKamar"]').type('3')
    cy.wait(5000)
    cy.contains('SIMPAN').click()
    cy.wait(8000)
    cy.contains('Logout').click()
  })
    
    it('Mengedit data kamar', () => {
      cy.wait(5000)
      cy.visit('http://localhost/Tugas_Besar_Hotel/login.php')
      cy.get('input[name="username"]').type('admin')
      cy.get('input[name="password"]').type('admin')
      cy.get('button[class="btn btn-primary btn-sm btn-block"]').click()
      cy.contains('Data Kamar').click()
    //MENGEDIT DATA
    cy.contains('Edit').click()
    cy.get('input[name="namaKamar"]').clear()
    cy.get('input[name="namaKamar"]').type('Kamar Quiz2')
    cy.get('input[name="hargaKamar"]').clear()
    cy.get('input[name="hargaKamar"]').type('2000000')
    cy.get('input[name="ukuranKamar"]').clear()
    cy.get('input[name="ukuranKamar"]').type('35')
    cy.get('input[name="kapasitasKamar"]').clear()
    cy.get('input[name="kapasitasKamar"]').type('2')
    cy.wait(5000)
    cy.contains('SIMPAN').click()
  })
})