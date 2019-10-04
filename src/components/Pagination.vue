.<template>
  <div class="d-flex fixed-bottom" v-if="amountOfPages > 1">
    <nav class="mx-auto">
      <ul class="pagination">
        <li class="page-item" :class="{disabled: getActivePage === 0}">
          <button class="page-link" @click="previous">Previous</button>
        </li>
        <li is="page-tab" v-for="page in pageList" :page="page" :key="page"></li>
        <li class="page-item" :class="{disabled: getActivePage === (amountOfPages -1)}">
          <button class="page-link" @click="next">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import PageTab from "./PageTab";
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["amountOfPages", "getActivePage", "pageList"])
  },
  methods: {
    ...mapMutations(["setActivePage"]),
    next() {
      this.setActivePage(
        Math.min(this.amountOfPages - 1, this.getActivePage + 5)
      );
    },
    previous() {
      this.setActivePage(Math.min(0, Math.abs(this.getActivePage - 5)));
    }
  },
  components: { PageTab }
};
</script>

<style>
</style>