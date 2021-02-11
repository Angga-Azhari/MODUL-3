Vue.component('showform' ,{
    template: '#show-form' ,
    data(){
        return{
            data: {NamaPeminjam: '', TanggalPinjam: '',NamaPetugas: ''}
        }
    },
    methods: {
        simpan: function(){
            this.$emit('send-data', this.data);
            this.data.NamaPeminjam = "";
            this.data.TanggalPinjam= "";
            this.data.NamaPetugas = "";
        }

    }
})

Vue.component('showdata',{
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        perpus: {}
    },
    methods: {
        getData: function(value){
            this.perpus = {
                NamaPeminjam : value.NamaPeminjam,
                TanggalPinjam : value.TanggalPinjam,
                NamaPetugas : value.NamaPetugas
            }
        }

    }
})