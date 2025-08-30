import instance from "@/utils/request";

export function  getCategory() {
  return instance({
    url:'home/category/head'
  })
}
