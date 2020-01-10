/**
 * *@2019-04-15
 * *@author liulifu
 * *@describe 基于umi-request(fetch)封装的异步http请求库
 */
import {extend} from 'umi-request';
import router from '@/router/index';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  302: "",
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};


/**
 * 异常处理程序，http异常
 */
const errorHandler = error => {
  const { response = {} } = error;
  const errortext = codeMessage[response.status] || response.statusText;
  return response

};


// code:1101011
function handleErrorCode(code){

  let errorCode = code.toString().substr(0,1)
  let notify={
    type:'info',
    title: 'success',
    text:'请求数据成功',
  }
  if(errorCode=='1'){ //成功
    return true
  }else if(errorCode=='2'){
    notify.title="成功"
  }else{

  }

  // window._bbxApp.$notify(notify)
  return false
}

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie //omit,same-origin,include
});

// response拦截器, 处理response
request.interceptors.response.use(async (response, options) => {
  let {status,type,} = response


  if(status !== 200){
    if(status===302){
      router.push({path:"/service-upgrade"})

    }


    const resData = {status:2,sucess:false,data:{}}

    return new Response(new Blob([JSON.stringify(resData)]))

  }
  // DELETE and 204 do not return data by default
  // using .json will report an error.

  const data = await response.clone().json();

  if(data){
    let code = data.status
    let success = handleErrorCode(code)
    data.success = success
    let res = new Response(new Blob([JSON.stringify(data)]))
    return res
  }
  return response;

});
/**
 * 页面中所有的 response数据格式：
 * {
 *  status:1101021
 *  sucess:true,//判断成功与否
 *  data:{}
 * }
 */


export default request;
