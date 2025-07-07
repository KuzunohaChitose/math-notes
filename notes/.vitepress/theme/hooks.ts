import {onMounted, onUnmounted, reactive, ref} from "vue";

export const useScreenSize = () => {
    const size = reactive({
        height: 0,
        width: 0,
    });

    const listener = () => {
        size.height = window.innerHeight;
        size.width = window.innerWidth;
    };

    onMounted(() => {
        size.height = window.innerHeight;
        size.width = window.innerWidth;
        window.addEventListener("resize", listener);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", listener);
    });

    return size;
};

export const useAsumiIndex = () => {
    const index = ref(1);
    const _ = ref(-1);

    onMounted(() => {
        _.value = setInterval(() => {
            if (index.value >= 5) index.value = 1;
            else index.value++;
        }, 10000);
    });

    onUnmounted(() => {
        clearInterval(_.value);
    });

    return index;
};
