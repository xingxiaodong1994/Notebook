# http常见问答

### 1.Cookie与Session的区别？

答：

**cookie**

- Cookie 是 用户登录上 服务器返回的一串代码；

- 它被设置在http响应报文的响应头中，常写作:

  `<'Set-Cookie':'SessionId'>`

- 登录之后用户在浏览**域名相同**时，每次都会自动带上cookie.

- 服务器通过cookie可以查到用户的信息，并由此赋予客户一定的权限（如会员）。

- cookie一般会在浏览器上保存一段时间，默认在用户在关闭页面时失效。但是后台可以任意设置过期时间。

- cookie大小一般在4kb左右。

**session**

- Session是基于cookie基础之上的，目的是为了对cookie进行加密，保护用户的隐私信息。

- Session实质上是服务器上的一小块内存，它用哈希表的形式保存用户信息的引用。常写作：

  `Session:{SessionId:用户信息引用}`

- `SessionId`一般为随机数，作为Cookie 的 值发给登录的用户。

- 服务器通过读取`SessionId`的值来找到用户的隐私信息

- `Session`优点：通过随机数对cookie进行加密；避免把用户的隐私信息直接暴露给客户端；保护用户的隐私信息。

## 2.Cookie和`LocalStorage`的区别 

**cookie**

- Cookie 是 用户登录上 服务器返回的一串代码；

- 它被设置在http响应报文的响应头中，常写作:

  `<'Set-Cookie':'SessionId'>`

- 登录之后用户在浏览**域名相同**时，每次都会自动带上cookie.

- 服务器通过cookie可以查到用户的信息，并由此赋予客户一定的权限（如会员）。

- cookie一般会在浏览器上保存一段时间，默认在用户在关闭页面时失效。但是后台可以任意设置过期时间。

- cookie大小一般在4kb左右。

**`LocalStorage`**

-  **`LocalStorage`** 本质上是浏览器上的一块内存空间
-  **`LocalStorage`**和HTTP 协议没有任何关系。
- 域名相同的页面可以互相读取 **`LocalStorage`**存储的信息
- 每个域名下分配的 **`LocalStorage`**大小一般在 5Mb 左右。
-  **`LocalStorage`**永久有效，除非用户清理缓存

##  3.`SessionStorage`和`LocalStorage`的区别

`SessionStorage`和`LocalStorage`的相同点

- 本质上是浏览器上的一块内存空间
- 和HTTP 协议没有任何关系。
- 域名相同的页面才可以互相读取 **`LocalStorage`**和**`SessionStorage`**存储的信息
- 每个域名下分配的 **`LocalStorage`**和**`SessionStorage`**大小一般在 5Mb 左右。

`SessionStorage`和`LocalStorage`的不同点

-  **`LocalStorage`**永久有效，除非用户清理缓存
- **`SessionStorage`**会在页面关闭后失效。

## 4. Cookie 如何设置过期时间？ 如何删除 Cookie？ 

**cookie设置过期时间**

- Cookie可以指定一个特定的过期时间（`Expires`）或有效期（`Max-Age`）。 
- `Set-Cookie: SessionId=xxxxx; Expires=Wed, 21 Oct 2020 07:28:00 GMT;`
- `Set-Cookie: SessionId=xxxxx; Max-Age=60;`

**删除cookie**

- 通过设置新的cookie来覆盖掉原来的cookie
- 在浏览器开发者工具中手动删除cookie

## 5.Cache-Control: max-age=1000 缓存 与 ETag 的「缓存」有什么区别？ 

- Cache-Control: max-age=1000 缓存，表示此资源在浏览器上缓存1000s，1000s内刷新页面，浏览器不会对服务器发起http请求来获取此资源，而是直接调用缓存。

- `ETag:xxxx` 的「缓存」，浏览器仍会发起http请求来获取此资源，但是请求报文中的请求头多了一项

  `If-None-Match:xxxx`,

  - 如果服务器端资源的`ETag`值与`If-None-Match`值匹配，则不下载此资源，同时调用缓存中上一次的资源。
  - 如果服务器端资源的`ETag`值与`If-None-Match`值不匹配，则重新下载此资源。

