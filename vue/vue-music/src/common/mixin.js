import {mapActions} from 'vuex'
export const searchMixin ={
    data () {
        return {
            query: ''
        }
    },
    methods: {
        onQueryChange (query) {
            this.query = query.trim()
            //看效果用的代码
       
        },
        blurInput () {
            this.$ref.searchBox.blur()
        },
        saveSearch (song) {
            this.$ref.searchBox.setQuery(song)
            this.saveSearchHistory(this.query)
        },
        ...mapActions([
            'saveSearchHistory',
            'deleteSearchHistory'
        ])
    }
}