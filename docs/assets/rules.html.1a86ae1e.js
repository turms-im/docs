import{_ as e,e as r}from"./app.b1d033b4.js";const i={},a=r('<h1 id="\u5F00\u53D1\u57FA\u672C\u89C4\u7EA6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u57FA\u672C\u89C4\u7EA6" aria-hidden="true">#</a> \u5F00\u53D1\u57FA\u672C\u89C4\u7EA6</h1><h2 id="\u4FDD\u5B88\u8BBE\u8BA1\u4E0E\u6FC0\u8FDB\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B88\u8BBE\u8BA1\u4E0E\u6FC0\u8FDB\u8BBE\u8BA1" aria-hidden="true">#</a> \u4FDD\u5B88\u8BBE\u8BA1\u4E0E\u6FC0\u8FDB\u8BBE\u8BA1</h2><p>Java\u81EA\u8EAB\u662F\u4E00\u4E2A\u5F88\u4FDD\u5B88\u7684\u8BED\u8A00\uFF0C\u5176\u5927\u751F\u6001\u4E5F\u975E\u5E38\u4FDD\u5B88\u3002\u5176\u8BBE\u8BA1\u539F\u5219\u662F\u201C\u63D0\u4F9B\u4E00\u5957\u5B89\u5168\u7684API\uFF0CJava\u4F7F\u7528\u8005\u600E\u4E48\u4F7F\u7528\u8FD9\u4E9BAPI\uFF0C\u90FD\u4E0D\u4F1A\u5BFC\u81F4Java\u5185\u90E8\u51FA\u9519\u201D\uFF08\u9664\u4E86Unsafe\u7C7B\uFF09\uFF0C\u56E0\u6B64\u63D0\u4F9B\u5404\u79CD\u8BBF\u95EE\u63A7\u5236\u673A\u5236\u3001\u5185\u90E8\u5185\u5B58\u62F7\u8D1D\u4E0E\u53CD\u590D\u52A0\u9501\u3002\u800CTurms\u670D\u52A1\u7AEF\u4EE3\u7801\u7684\u7F16\u5199\u539F\u5219\u4E00\u822C\u662F\u201C\u7A0B\u5E8F\u600E\u4E48\u8DD1\u7684\u5FEB\uFF0C\u600E\u4E48\u5199\u3002\u53EA\u8981Caller\u6562\u4E71\u4F20\u6216\u4E71\u7528\u6570\u636E\uFF0C\u6211\u4EEC\u5C31\u76F4\u63A5\u62A5\u9519\u6216\u76F4\u63A5\u65E0\u89C6\u201D\u3002\u4E3E\u4F8B\u800C\u8A00\uFF0CTurms\u7684<code>StringUtil</code>\u901A\u8FC7<code>jdk.internal.misc.Unsafe#getReference</code>\u83B7\u53D6<code>String</code>\u5BF9\u8C61\u5185\u90E8\u7684<code>byte[]</code>\u5BF9\u8C61\uFF0C\u4EE5\u907F\u514D\u5185\u5B58\u62F7\u8D1D\uFF0CCaller\u9700\u8981\u81EA\u884C\u4FDD\u8BC1\u4E0D\u201C\u80E1\u4F5C\u975E\u4E3A\u201D\u3002\u800CJava\u81EA\u8EAB\u63D0\u4F9B\u7684<code>String#getBytes()</code>\u4E3A\u4E86\u4FDD\u8BC1\u4F7F\u7528\u8005\u65E0\u6CD5\u4FEE\u6539\u5230\u5185\u90E8\u7684<code>byte[]</code>\uFF0C\u56E0\u6B64\u662F\u5C06\u8BE5<code>byte[]</code>\u5BF9\u8C61\u62F7\u8D1D\u4E00\u4EFD\uFF0C\u518D\u4F20\u7ED9Caller\u3002</p><p>\u56E0\u6B64\u5728\u5B57\u7B26\u4E32\u5B9E\u8DF5\u4E2D\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5E38\u89C4\u57FA\u4E8ESpring\u642D\u5EFA\u7684Web\u5E94\u7528\uFF0C\u4E00\u4E2AHTTP\u8BF7\u6C42\u4ECETCP\u5B57\u8282\u6D41\u5207\u5272\u51FA\u6765\u4E4B\u540E\uFF0C\u53EF\u80FD\u9700\u8981\u53CD\u53CD\u590D\u590D\u5728<code>String</code>\u3001<code>StringBuilder</code>\u3001<code>byte[]</code>\u3001<code>HeapByteBuffer</code>\u3001<code>DirectByteBuffer</code>\u7B49\u6570\u636E\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\u4E0E\u62FC\u63A5\uFF0C\u6700\u7EC8\u4E00\u4E2A\u4E1A\u52A1\u5C42\u9762\u4E0A\u7684String\u7C7B\u578B\u5BF9\u8C61\uFF0C\u88AB\u7B2C\u4E09\u65B9\u5E93\u4E0EJava\u5185\u90E8\u62F7\u8D1D5~30\u6B21\u662F\u5F88\u5E38\u89C1\u7684\u3002</p><p>\u518D\u4EE5\u5177\u4F53\u5E94\u7528\u4E3A\u4F8B\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528Spring\u521B\u5EFA\u4E86\u4E00\u4E2AController Bean\uFF0C\u5E76\u5728\u5176\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A\u8FD4\u56DE\u503C\u7C7B\u578B\u4E3A<code>String</code>\u7684API\u51FD\u6570\uFF0C\u4EE5\u901A\u8FC7\u8FD9\u4E2AAPI\u8FD4\u56DEPrometheus\u683C\u5F0F\u7684\u5EA6\u91CF\u6570\u636E\u3002\u5982\u679C\u6211\u4EEC\u5728\u8FD9\u524D\u63D0\u4E0B\u505A\u201C\u6700\u4F18\u96C5\u201D\u7684\u5199\u6CD5\uFF0C\u6211\u4EEC\u81F3\u5C11\u9700\u8981\u5BF9\u8FD9\u4E2A\u5185\u5B58\u5BF9\u8C61\u505A4\u6B21\u5185\u5B58\u62F7\u8D1D\uFF08\u4E0D\u542B\u7CFB\u7EDF\u5185\u6838\u5237\u6570\u636E\u5230\u7F51\u5361\u90E8\u5206\uFF1BTurms\u901A\u8FC7\u4F18\u5316\uFF0C\u53EA\u9700\u8981\u505A\u4E00\u6B21\u5185\u5B58\u62F7\u8D1D\uFF1A\u5373\u5806\u5185\u5B58\u5230\u5806\u5916\u5185\u5B58\uFF1B\u8FD9\u4E2A\u5EA6\u91CF\u6570\u636E\u5B9E\u9645\u5927\u5C0F\u7EA68K\uFF09\uFF1A</p><ol><li>\u5C06Java\u7684\u57FA\u672C\u6570\u636E\u5199\u5165<code>StringBuilder</code>\uFF0C\u6B64\u65F6\u5806\u5185\u5B58-&gt;\u5806\u5185\u5B58\u62F7\u8D1D</li><li>StringBuilder#toString()\uFF0C\u53C8\u4E00\u6B21\u5806\u5185\u5B58\u62F7\u8D1D</li><li>String#getBytes()\uFF0C\u81F3\u5C11\u53C8\u4E00\u6B21\u5806\u5185\u5B58\u62F7\u8D1D</li><li>\u5C06byte[]\u5199\u5230\u5806\u5916\u5185\u5B58DirectByteBuffer\uFF0C\u4EE5\u4EA4\u7ED9\u7CFB\u7EDF\u5185\u6838\u505A\u5199\u5165\u6570\u636E\u64CD\u4F5C</li></ol><p>\u5185\u5B58\u6709\u6548\u4F7F\u7528\u7387\u6781\u4F4E\uFF0C\u4E14\u6CE8\u610F\u4E0A\u9762\u53EA\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684API String\u54CD\u5E94\u8FD4\u56DE\u7684\u529F\u80FD\uFF0C\u5B9E\u9645\u5E94\u7528\u4E2D\u6D89\u53CA\u5230\u7684\u6D41\u7A0B\u66F4\u4E3A\u590D\u6742\uFF0C\u56E0\u6B64\u4E00\u4E2A\u6D41\u7A0B\u4E0B\u6765\uFF0C\u4E00\u4E2A\u5B57\u7B26\u4E32\u88AB\u62F7\u8D1D5~30\u6B21\u662F\u975E\u5E38\u5E38\u89C1\u7684\u4E8B\u60C5\u3002\u56E0\u6B64\u6211\u4EEC\u7ECF\u5E38\u80FD\u89C1\u5230\u5F53\u4E00\u4E2AHTTP\u670D\u52A1\u7AEF\u57FA\u4E8E\u5176\u8BED\u8A00\u4E3B\u6D41\u751F\u6001\u6784\u5EFA\u65F6\uFF0C\u4E00\u4E2A\u5E38\u89C4Java Web\u5E94\u7528\u6240\u4F7F\u7528\u5230\u7684\u5185\u5B58\uFF0C\u53EF\u80FD\u662F\u5176\u7B49\u91CFC++ HTTP\u670D\u52A1\u7AEF\u7684\u6570\u5341\u500D\u751A\u81F3\u767E\u500D\u3002</p><p>\u9664\u4E86\u5404\u79CD\u7F51\u7EDCAPI\uFF0C\u65E5\u5FD7\u5B9E\u73B0\u4E5F\u9700\u8981\u9891\u7E41\u8DDF<code>String</code>\u6253\u4EA4\u9053\u3002\u800CTurms\u5728\u5185\u5B58\u5B9E\u8DF5\u4E0A\u5C31\u6BD4\u901A\u7528\u5B9E\u73B0\u9AD8\u6548\u592A\u591A\u4E86\uFF0CTurms\u76F4\u63A5\u901A\u8FC7<code>PooledByteBufAllocator.DEFAULT</code>\u5206\u914D\u7F13\u5B58\u4E86\u7684\u5806\u5916\u5185\u5B58\uFF0C\u5E76\u76F4\u63A5\u5C06Java\u7684\u57FA\u672C\u6570\u636E\u5199\u5165\u5806\u5916\u5185\u5B58\u5757\u4E2D\u3002\u5E76\u4E14\u5728\u6574\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u907F\u514D\u4F7F\u7528Java\u81EA\u8EAB\u7684\u4F4E\u6548\u5B9E\u73B0\uFF0C\u4ECE\u800C\u907F\u514D\u65E0\u610F\u4E49\u7684\u5806\u5230\u5806\u5185\u5B58\u62F7\u8D1D\u3002</p><p>\u7EFC\u4E0A\uFF0C\u5C3D\u7BA1Java\u81EA\u8EAB\u6BD4\u8F83\u4FDD\u5B88\uFF0CTurms\u5219\u76F8\u5BF9\u5F3A\u8C03\u6FC0\u8FDB\uFF0C\u5E76\u4EE5\u6027\u80FD\u4F18\u5148\uFF0C\u800C\u975E\u201C\u4EE3\u7801\u4F18\u96C5\u201D\uFF0C\u5FC5\u8981\u65F6\u5584\u7528Unsafe\u7C7B\u3002\u5F53\u7136\uFF0C\u6211\u4EEC\u201C\u6FC0\u8FDB\u201D\u4E5F\u662F\u6709\u9650\u5EA6\u7684\uFF0C\u8BF8\u5982\uFF1A1. \u7EDD\u4E0D\u66FF\u6362Java\u5185\u90E8\u7C7B\u5B9E\u73B0\uFF1B2. \u5C3D\u91CF\u4E0D\u7F16\u5199JNI\u4E0EC\u8BED\u8A00\u4EE3\u7801</p><p>\u8865\u5145\uFF1A</p><ol><li>\u5BF9\u4E8EJava\u8BED\u6CD5\u7CD6\u7EA7\u522B\u7684\u5B9E\u8DF5\uFF0C\u6211\u4EEC\u7684\u6001\u5EA6\u662F\u201C\u6BD4\u8F83\u65E0\u6240\u8C13\u201D\uFF0C\u5982<code>for (X x : Collection&lt;X&gt;)</code> \uFF08\u9700\u8981\u521B\u5EFA\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF0C\u591A\u6D88\u8017\u81F3\u5C11\u51E0\u5341B\uFF09\u4E0E\u66F4\u9AD8\u6548\u7684<code>for (int i = 0; i &lt; length; i++)</code>\uFF0C\u4E24\u8005\u5199\u6CD5\u90FD\u5141\u8BB8</li><li>\u9664\u4E86\u4FDD\u5B88\u7684\u503E\u5411\uFF0CJava\u5708\u5B50\u8FD8\u6709\u4E00\u4E2A\u5F88\u540A\u8BE1\u7684\u73B0\u8C61\uFF0C\u5373\u201C\u4F18\u5316\u65F6\u9009\u62E9\u6027\u5FFD\u89C6\u201D\uFF0C\u6BD4\u5982\u4E00\u65B9\u9762\u653E\u4EFB<code>String</code>\u4E0E<code>StringBuilder</code>\u7684\u5185\u5B58\u62F7\u8D1D\uFF0C\u4E00\u4E2AAPI\u5904\u7406\u6D41\u7A0B\u4E0B\u6765\uFF0C\u9700\u8981\u628A\u6570\u4E2A<code>String</code>\u62F7\u8D1D\u6570\u5341\u6B21\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u5C31\u7CBE\u6253\u7EC6\u7B97\u5730\u7814\u7A76JVM\u5185\u5B58\u4F18\u5316\u3002Turms\u9762\u5BF9\u5404\u79CD\u4F18\u5316\u9879\uFF0C\u4E3B\u8981\u5C31\u662F\u6839\u636E\u201C\u6027\u4EF7\u6BD4\u201D\uFF0C\u4F18\u5148\u4F18\u5316\u6027\u4EF7\u6BD4\u9AD8\u7684\u90E8\u5206\uFF0C\u4EE5\u907F\u514D\u7F18\u6728\u6C42\u9C7C\u3002</li></ol><h2 id="\u670D\u52A1\u7AEF\u5F00\u53D1\u7684\u57FA\u672C\u89C4\u7EA6" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u5F00\u53D1\u7684\u57FA\u672C\u89C4\u7EA6" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u5F00\u53D1\u7684\u57FA\u672C\u89C4\u7EA6</h2><h3 id="\u4EE3\u7801\u7F16\u5199\u7B56\u7565\u7684\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u7F16\u5199\u7B56\u7565\u7684\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u4EE3\u7801\u7F16\u5199\u7B56\u7565\u7684\u4F18\u5148\u7EA7</h3><p>\u4E00\u822C\u89C4\u5219\uFF1A\u6027\u80FD\uFF08\u4F4E\u65F6\u95F4\u590D\u6742\u5EA6\u4E0E\u7A7A\u95F4\u590D\u6742\u5EA6\uFF09 &gt; \u4EE3\u7801\u53EF\u8BFB\u6027 &gt; \u8BBE\u8BA1\u6A21\u5F0F</p><ul><li><p>\u6027\u80FD &gt; \u4EE3\u7801\u53EF\u8BFB\u6027\u3002\u5982\u4F7F\u7528<code>long</code>\uFF0C\u800C\u4E0D\u662F<code>java.util.Date</code>\u6216<code>java.time.Instant</code>\u6765\u8868\u793A\u65F6\u95F4\uFF0C\u4EE5\u907F\u514D\u521B\u5EFA\u65B0\u5BF9\u8C61\u4EE5\u53CA\u65F6\u95F4\u8F6C\u6362\u65F6\u7684\u8BA1\u7B97\uFF1B\u53C8\u6BD4\u5982<code>im.turms.server.common.cluster.service.idgen.SnowflakeIdGenerator</code>\u7C7B\u4E0B\u7684<code>nextIncreasingId</code>\u51FD\u6570\u4E0E<code>nextLargeGapId</code>\u51FD\u6570\u91CD\u590D\u4E86\u7EA610\u884C\u4EE3\u7801\uFF0C\u4F46\u6211\u4EEC\u4E0D\u63D0\u53D6\u8FD9\u516C\u5171\u4EE3\u7801\u51FA\u6765\uFF0C\u4EE5\u907F\u514D\u5F00\u8F9F\u65B0\u65B9\u6CD5\u6808\uFF08\u4E0D\u8003\u8651JVM\u7684\u6EDE\u540EInline\u64CD\u4F5C\uFF09\u3002</p></li><li><p>\u6027\u80FD &gt; \u8BBE\u8BA1\u6A21\u5F0F\u3002\u5982\u573A\u666F\uFF1A\u904D\u5386\u5904\u7406<code>String</code>\u4E2D\u7684<code>char[]</code>\u5143\u7D20\u3002\u5982\u679C\u4F7F\u7528\u8D23\u4EFB\u94FE\u6A21\u5F0F\uFF0C\u5219\u9700\u8981\u7528\u4E0D\u540C\u7684Handler\u7C7B\u5B9E\u73B0\u4E0D\u540C\u7C7B\u522B\u7684\u5904\u7406\u903B\u8F91\uFF0C\u867D\u7136\u8FD9\u6837\u53EF\u4EE5\u628A\u903B\u8F91\u7406\u5F97\u5F88\u6E05\u6670\uFF0C\u4F46\u662F\u6BCF\u4E2AHandler\u90FD\u9700\u8981\u904D\u5386\u4E00\u904D<code>char[]</code>\uFF0C\u56E0\u6B64\u5904\u7406\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A<code>O(n*m)</code>\uFF08n\u4E3Achar[]\u957F\u5EA6\uFF0Cm\u4E3AHandler\u4E2A\u6570\uFF09\uFF0C\u8FD9\u79CD\u590D\u6742\u5EA6\u7684\u4EE3\u7801\u5728Turms\u670D\u52A1\u7AEF\u4EE3\u7801\u4E2D\u662F\u7981\u6B62\u7684\u3002\u6B64\u65F6\uFF0C\u5C31\u9700\u8981\u53CD\u8BBE\u8BA1\u6A21\u5F0F\u6765\u7F16\u5199\u4EE3\u7801\uFF0C\u5C3D\u53EF\u80FD\u628A\u5904\u7406\u903B\u8F91\u90FD\u5199\u5728\u4E00\u6B21\u904D\u5386\u4E2D\uFF0C\u4E14\u5C3D\u91CF\u4E0D\u8981\u65B0\u5F00\u51FD\u6570\u533A\u5206\u903B\u8F91\uFF08\u8FD9\u6761\u53EF\u9009\uFF09\uFF0C\u800C\u662F\u7528\u6CE8\u91CA\u5206\u5757\u6765\u533A\u5206\u4E0D\u540C\u7684\u5904\u7406\u903B\u8F91\uFF0C\u4EE5\u907F\u514D\u51FD\u6570\u6808\u5F00\u9500\u3002</p></li></ul><p>\u4F8B\u5916\uFF1A\u5982\u5728\u6781\u5C11\u6570\u60C5\u51B5\u4E0B\uFF0C\u4EE3\u7801\u53EF\u8BFB\u6027\u4F18\u5148\u4E8E\u6027\u80FD\u3002\u4EE5\u4E0B\u6587\u4E2D\u63D0\u5230\u7684<code>\u7981\u6B62\u5728\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E0E\u7BA1\u7406\u5458API\u8BF7\u6C42\u7684\u5904\u7406\u8FC7\u7A0B\u4E2D\u4F7F\u7528\u53CD\u5C04</code>\u4E3A\u4F8B\u3002\u5C3D\u7BA1\u6709\u8FD9\u4E2A\u89C4\u5219\uFF0C\u4F46\u5982\u679C\u8BF7\u6C42\u4E2D\u9700\u8981\u521B\u5EFA\u4F9B\u6570\u636E\u5E93\u9A71\u52A8\u4F7F\u7528\u7684Entity\u5BF9\u8C61\u65F6\uFF0C\u90A3\u6211\u4EEC\u8FD8\u662F\u4F1A\u901A\u8FC7\u53CD\u5C04\u521B\u5EFA\u5E76\u586B\u5145\u8FD9\u4E2A\u5BF9\u8C61\u3002\u56E0\u4E3A\u5982\u679C\u4E0D\u4F7F\u7528\u53CD\u5C04\uFF0C\u5C31\u9700\u8981\u624B\u5199\u4E0A\u767E\u4E2A\u5B57\u6BB5\u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316\u903B\u8F91\uFF0C\u5DE5\u4F5C\u91CF\u5DE8\u5927\uFF0C\u4E14\u5BB9\u6613\u51FA\u9519\u3002\u800C\u4F7F\u7528\u53CD\u5C04\u7684\u6536\u76CA\u6027\u5C31\u5F88\u9AD8\uFF0C\u6240\u4EE5\u5141\u8BB8\u4F7F\u7528\u53CD\u5C04\u3002</p><p>\u4E0A\u8FF0\u7684\u793A\u4F8B\u8FD8\u6709\u5F88\u591A\uFF0C\u5177\u4F53\u53EF\u4EE5\u770BTurms\u670D\u52A1\u7AEF\u4EE3\u7801\u3002\u6DFB\u52A0\u65B0\u4EE3\u7801\u65F6\uFF0C\u53EA\u9700\u8981\u4FDD\u8BC1\uFF1A\u65B0\u52A0\u7684\u4EE3\u7801\u51E0\u4E4E\u6CA1\u6709\u4EFB\u4F55\u65F6\u95F4\u6216\u7A7A\u95F4\u4E0A\u7684\u4F18\u5316\u4F59\u5730\u3002\u5982\u679C\u8FD8\u6709\u4F18\u5316\u7A7A\u95F4\uFF0C\u4F46\u6536\u76CA\u5F88\u4F4E\u4E14\u5B9E\u73B0\u590D\u6742\uFF0C\u5219\u5141\u8BB8\u540E\u671F\u518D\u8FDB\u884C\u4F18\u5316\u3002</p><h4 id="\u7EBF\u7A0B\u4E0E\u9501" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u4E0E\u9501" aria-hidden="true">#</a> \u7EBF\u7A0B\u4E0E\u9501</h4><ul><li><p>\u7981\u6B62\u4F7F\u7528\u5F39\u6027\u7EBF\u7A0B\u6C60\uFF0C\u5982\u9700\u521B\u5EFA\u65B0\u7EBF\u7A0B\uFF0C\u5219\u9700\u8981\u8FDB\u884C\u4E13\u95E8\u7684\u4EE3\u7801\u5BA1\u67E5</p></li><li><p>\u5728\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E0E\u7BA1\u7406\u5458API\u8BF7\u6C42\u7684\u5904\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u5C3D\u91CF\u4E0D\u4F7F\u7528synchronized\u4E0ELock\u64CD\u4F5C\uFF08\u5305\u62EC\u53EF\u91CD\u5165\u9501\uFF09\u3002\u5982\u679C\u786E\u5B9E\u9700\u8981\u4E34\u754C\u533A\uFF0C\u5219\u4F18\u5148\u8003\u8651\u91CD\u6784\u4EE3\u7801\u6D41\u7A0B\u6216\u7528CAS\u6280\u672F\u66FF\u4EE3\u3002</p></li></ul><h4 id="\u5185\u5B58\u4E0Egc" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58\u4E0Egc" aria-hidden="true">#</a> \u5185\u5B58\u4E0EGC</h4><ul><li><p>\u7981\u6B62\u5BF9ByteBuf\u8FDB\u884C\u62F7\u8D1D\u64CD\u4F5C</p></li><li><p>\u5BF9\u4E8E\u7F51\u7EDCI/O\u64CD\u4F5C\uFF0C\u7981\u6B62\u4F7F\u7528\u975E\u6C60\u5316\u6216\u5806\u5185\u5B58\uFF0C\u53EA\u5141\u8BB8\u4F7F\u7528\u6C60\u5316\u7684\u76F4\u63A5\u5185\u5B58</p></li><li><p>\u5C3D\u91CF\u4E0D\u8981\u521B\u5EFA\u65B0\u5BF9\u8C61\uFF0C\u5C3D\u91CF\u4F7F\u7528\u5BF9\u8C61\u6C60\u3002\u5982\u8BBE\u8BA1\u4E2D\u5E38\u89C1\u7684\uFF1A\u4E3A\u4E86\u5C06\u4E0D\u540C\u5C42\u7684\u6570\u636E\u6A21\u578B\u8FDB\u884C\u903B\u8F91\u5206\u79BB\uFF0C\u4E13\u95E8\u62C6\u6210\u4E86DTO\u4E0EBO\u6A21\u578B\u3002Turms\u5BF9\u4E8E\u8FD9\u79CD\u573A\u666F\uFF0C\u4F1A\u5C3D\u91CF\u4F7F\u7528\u4E00\u4E2A\u6570\u636E\u6A21\u578B\uFF0C\u5E76\u901A\u8FC7\u81EA\u5B9A\u4E49Jackson\u7684\u5E8F\u5217\u5316\u903B\u8F91\u6765\u5B9E\u73B0\u7B26\u5408DTO\u6A21\u578B\u7684\u54CD\u5E94</p><p>\u53E6\u5916\uFF1A\u8BE5\u89C4\u5219\u4F1A\u5728Valhalla\u9879\u76EE\u53D1\u5E03\u4E4B\u540E\uFF0C\u53D1\u751F\u6539\u53D8\uFF0C\u5C24\u5176\u662F\u6211\u4EEC\u5C06\u79FB\u9664\u5927\u90E8\u5206\u73B0\u6709\u7684\u5BF9\u8C61\u6C60</p></li><li><p>\u5C3D\u91CF\u4E0D\u8981\u521B\u5EFA\u5E26\u591A\u4E2Aunused\u5B57\u6BB5\u7684\u5BF9\u8C61\u3002\u5982Turms\u7528\u81EA\u5B9A\u4E49\u7684<code>QueryOptions</code>\u6A21\u578B\u91CD\u6784\u4E86MongoDB\u7684<code>FindOptions</code>\u6A21\u578B\uFF0C\u5176\u4E2D\u4E00\u4E2A\u539F\u56E0\u5C31\u662F<code>FindOptions</code>\u6A21\u578B\u4F1A\u88AB\u9891\u7E41\u4F7F\u7528\uFF0C\u4F46\u5176\u5E26\u6709\u6570\u5341\u4E2A\u65E0\u7528\u5B57\u6BB5</p></li><li><p>\u5728\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E0E\u7BA1\u7406\u5458API\u8BF7\u6C42\u7684\u5904\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u7981\u6B62\u4F7F\u7528Stream</p></li></ul><h4 id="\u4EE3\u7406\u4E0E\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u4E0E\u53CD\u5C04" aria-hidden="true">#</a> \u4EE3\u7406\u4E0E\u53CD\u5C04</h4><ul><li><p>\u7981\u6B62\u4F7F\u7528\u52A8\u6001\u4EE3\u7406\u6280\u672F\uFF08\u5982Java\u52A8\u6001\u4EE3\u7406\u3001CGLib\u3001Spring AOP\u7B49\uFF09\uFF0C\u5C3D\u91CF\u4E0D\u4F7F\u7528\u4EE3\u7406\u6216\u4F7F\u7528\u9759\u6001\u7F16\u8BD1\u6280\u672F\u4EE3\u66FF\uFF08\u5982Lombok\uFF09</p></li><li><p>\u5728\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E0E\u7BA1\u7406\u5458API\u8BF7\u6C42\u7684\u5904\u7406\u8FC7\u7A0B\u4E2D\uFF0C\u9664\u975E\u4E0D\u4F7F\u7528\u53CD\u5C04\u5C31\u9700\u8981\u5199\u5927\u91CF\u7E41\u6742\u4EE3\u7801\uFF0C\u5176\u4ED6\u573A\u666F\u4E0B\u7981\u6B62\u4F7F\u7528\u53CD\u5C04\u6280\u672F\u3002\u5982\uFF1ATurms\u5728\u5BF9MongoDB\u7684Entity\u6A21\u578B\u7684\u6570\u767E\u4E2A\u5B57\u6BB5\u8FDB\u884C\u5E8F\u5217\u5316\u4E0E\u53CD\u5E8F\u5217\u5316\u65F6\uFF0C\u4F7F\u7528\u4E86\u53CD\u5C04</p></li></ul><p>\u53E6\u5916\uFF0C\u5982\u679C\u6709\u7B2C\u4E09\u65B9\u4F9D\u8D56\u8FDD\u80CC\u4E86\u4EE5\u4E0A\u539F\u5219\uFF0C\u5219\u6839\u636E\u6027\u4EF7\u6BD4\uFF0C\u6392\u671F\u5BF9\u7B2C\u4E09\u65B9\u4F9D\u8D56\u8FDB\u884C\u91CD\u6784</p><h2 id="\u5173\u4E8E\u4F9D\u8D56\u5E93\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u4F9D\u8D56\u5E93\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u5173\u4E8E\u4F9D\u8D56\u5E93\u7684\u4F7F\u7528</h2><p>\u5F88\u591A\u4F9D\u8D56\u5E93\u70ED\u8877\u4E8E\u5BF9\u5E95\u5C42\u5B9E\u73B0\u8FDB\u884C\u62BD\u8C61\u4E0E\u5C01\u88C5\uFF0C\u4EE5\u5B9E\u73B0\u201C\u5185\u90E8\u903B\u8F91\u900F\u660E\uFF0C\u4F7F\u7528\u8005\u4E0D\u7528\u5173\u5FC3\u80CC\u540E\u7684\u903B\u8F91\u201D\u3002\u8FD9\u6837\u7684\u8BBE\u8BA1\u5BF9\u4E8E\u4E00\u4E9B\u903B\u8F91\u7B80\u5355\u3001\u8981\u6C42\u5FEB\u901F\u4E0A\u7EBF\u3001\u4E14\u4E0D\u8FFD\u6C42\u6027\u80FD\u7684\u5E94\u7528\u6765\u8BF4\u6BD4\u8F83\u5B9E\u7528\u3002\u4F46\u968F\u7740\u4E00\u4E2A\u9879\u76EE\u8D8A\u5F80\u540E\u53D1\u5C55\uFF0C\u8D8A\u6DF1\u5165\u4F18\u5316\uFF0C\u8FD9\u4E2A\u4E0D\u53EF\u63A7\u7684\u62BD\u8C61\u5C42\uFF0C\u4F1A\u6210\u4E3A\u95EE\u9898\u6392\u67E5\u3001\u6027\u80FD\u4F18\u5316\u3001\u529F\u80FD\u5B9A\u5236\u7684\u7ECA\u811A\u77F3\u3002\u62BD\u8C61\u5C42\u5E26\u6765\u7684\u95EE\u9898\uFF0C\u8BF8\u5982\uFF1A</p><ul><li><p>\u9700\u6C42\u8FED\u4EE3\u4E0E\u7248\u672C\u66F4\u65B0\u4E25\u91CD\u6EDE\u540E\u3002\u5982\u679C\u6211\u4EEC\u7684\u9879\u76EE\u4F7F\u7528\u4E86\u4E00\u4E2A\u62BD\u8C61\u5C42\u7684A\u4F9D\u8D56\uFF0CA\u4F9D\u8D56\u5C01\u88C5\u4E86B\u4F9D\u8D56\u3002\u5982\u679C\u6211\u4EEC\u9700\u8981\u5F80B\u4F9D\u8D56\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7279\u6027\u6216\u6539Bug\uFF0C\u901A\u5E38\u7684\u6D41\u7A0B\u662F\uFF1A\u6211\u4EEC\u5411B\u4F9D\u8D56\u7684\u793E\u533A\u63D0Issue\uFF0C\u8FD0\u6C14\u597D\u7684\u8BDD\uFF0C\u5E73\u57472~4\u5929\u5F97\u5230\u56DE\u590D\u3002\u5982\u679C\u8FD0\u6C14\u8FD8\u5F88\u597D\uFF0C\u5BF9\u65B9\u613F\u610F\u6539\u3002\u5047\u8BBE\u6539\u52A8\u4E0D\u5927\uFF0C1\u5468\u540E\u76F8\u5173PR\u88ABmerged\u3002\u53EF\u80FD\u7B492\u5468\u30011\u4E2A\u6708\u3001\u751A\u81F3\u51E0\u4E2A\u6708\uFF0CB\u4F9D\u8D56\u7EC8\u4E8E\u53D1\u5E03\u65B0\u7248\u672C\u3002\u7136\u540E\u6211\u4EEC\u8FD8\u8981\u7B49A\u4F9D\u8D56\u66F4\u65B0B\u4F9D\u8D56\u7248\u672C\uFF0C\u53EF\u80FD\u53C8\u8FC7\u4E862\u5468\u30011\u4E2A\u6708\u3001\u751A\u81F3\u51E0\u4E2A\u6708\u3002\u7B49\u771F\u5230\u6211\u4EEC\u80FD\u4F7F\u7528\u5230\u65B0\u7279\u6027\uFF0C\u53EF\u80FD\u51E0\u4E2A\u6708\u5DF2\u7ECF\u8FC7\u4E86\u3002\u4F46\u66F4\u591A\u7684\u60C5\u51B5\u662F\uFF0CB\u4F9D\u8D56\u7684\u7EF4\u62A4\u8005\u538B\u6839\u4E0D\u613F\u610F\u4FEE\u6539\u76F8\u5173\u4EE3\u7801\u3002</p></li><li><p>\u7EDD\u5927\u90E8\u5206\u77E5\u540D\u4F9D\u8D56\u5E93\uFF0C\u53EA\u5173\u5FC3\u529F\u80FD\u5B9E\u73B0\uFF0C\u5E76\u4E0D\u5173\u5FC3\u6027\u80FD\uFF0C\u57FA\u672C\u662F\u201C\u529F\u80FD\u591F\u7528\uFF0C\u6027\u80FD\u51D1\u5408\u5C31\u884C\u201D\u7684\u6001\u5EA6\u3002\uFF08Turms\u901A\u8FC7\u91CD\u6784\u4F9D\u8D56\u4EE3\u7801\uFF0C\u89E3\u51B3\u4E86\u5927\u90E8\u5206\u4E0B\u8FF0\u95EE\u9898\uFF09\u8BF8\u5982<code>mongo-java-driver</code>\u5728\u8FDB\u884CAPI\u8C03\u7528\u65F6\uFF0C\u53CD\u53CD\u590D\u590D\u521B\u5EFA\u5927\u91CF\u7684\u4E2D\u95F4\u5BF9\u8C61\uFF1BLettuce\u5728\u5E8F\u5217\u5316\u4F20\u9012\u7ED9Redis\u7684\u6307\u4EE4\u53C2\u6570\u65F6\u9700\u8981\u53CD\u590D\u6269\u5145\u5185\u5B58\uFF0C\u5E76\u4E14\u8BE5Cache\u7684\u5185\u5B58\u6570\u636E\u4E5F\u6CA1Cache\uFF1BSpring\u7684AOP\u5E38\u7528\u4E8E\u4EE3\u7406Controller\u5C42\u65B9\u6CD5\u8C03\u7528\uFF0C\u53EF\u7528\u4E8E\u6355\u83B7\u89E3\u6790\u540E\u53C2\u6570\uFF0C\u8FDB\u884C\u65E5\u5FD7\u6253\u5370\uFF08WebFilter\u65E0\u6CD5\u83B7\u5F97\u89E3\u6790\u540E\u7684\u53C2\u6570\uFF09\u3002\u4F46AOP\u4F1A\u7ED9\u4E00\u4E2A\u65B9\u6CD5\u5F92\u589E19\u4E2Astacks\u5E76\u5927\u91CF\u4F7F\u7528\u53CD\u5C04\uFF0C\u4ECEAOP\u4EE3\u7406\u5F00\u59CB\u5230Controller\u65B9\u6CD5\u5C42\u7684\u8C03\u7528\u6240\u9700\u65F6\u95F4\u751A\u81F3\u6BD4Turms\u5185\u90E8\u4E1A\u52A1\u5904\u7406\u65F6\u95F4\u8FD8\u957F\uFF08\u989D\u5916\u8865\u5145\uFF1AAOP\u662F\u4E2A\u975E\u5E38\u7CDF\u7CD5\u7684\u8BBE\u8BA1\uFF0CSpring\u5E94\u8BE5\u4E3AController\u5C42\u91C7\u7528\u7684\u8D23\u4EFB\u94FE\u8BBE\u8BA1\uFF09\u3002\u7EFC\u4E0A\uFF0C\u5F88\u591A\u7684\u77E5\u540DJava\u4F9D\u8D56\u5E93\u7684\u4EE3\u7801\u8D28\u91CF\u5E76\u4E0D\u9AD8\uFF0C\u751A\u81F3\u4EE3\u7801\u6027\u80FD\u4E0E\u8D28\u91CF\u582A\u5FE7\u3002</p></li><li><p>\u5173\u6CE8\u4E8E\u62BD\u8C61\u5B9E\u73B0\u7684\u4F9D\u8D56\u5E93\u5728\u4E0E\u54CD\u5E94\u5F0F\u7F16\u7A0B\u7ED3\u5408\u65F6\uFF0C\u5728\u95EE\u9898\u6392\u67E5\u95EE\u9898\u4E0A\uFF0C\u4F1A\u7ED9\u5F00\u53D1\u8005\u5E26\u6765\u5730\u72F1\u7EA7\u7684\u4F53\u9A8C\uFF0C\u5C24\u5176\u662FBug\u4E0E\u9700\u8981\u624B\u52A8\u91CA\u653E\u7684\u5185\u5B58\u76F8\u5173\u3002\u5728\u5E38\u89C4\u95EE\u9898\u6392\u67E5\u4E0A\uFF0C\u6211\u4EEC\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7\u6808\u4FE1\u606F\u6765\u5F88\u5FEB\u7684\u6392\u67E5\u51FA\u95EE\u9898\u3002\u4F46\u5728\u54CD\u5E94\u5F0F\u7F16\u7A0B\u4E2D\uFF0C\u8FD9\u6837\u7684\u65B9\u6CD5\u901A\u5E38\u884C\u4E0D\u901A\uFF0C\u6211\u4EEC\u66F4\u591A\u7684\u9760\u903B\u8F91\u63A8\u7406\u6765\u6392\u67E5\u95EE\u9898\u3002\u5373\u719F\u8BFB\u4E0A\u4E0B\u6E38\u4EE3\u7801\uFF08\u5305\u62EC\u4F9D\u8D56\u5305\u5185\u7684\u4EE3\u7801\uFF09\uFF0C\u63A8\u6F14\u4EE3\u7801\u53EF\u80FD\u7ECF\u8FC7\u7684\u6240\u6709\u6D41\u7A0B\u3002</p><p>\u5982\u679C\u4EE3\u7801\u7684\u62BD\u8C61\u5C42\u5C11\u3001\u4E14\u8C03\u7528\u5173\u7CFB\u6241\u5E73\uFF0C\u8FD9\u4E2A\u6392\u67E5\u8FC7\u7A0B\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u53EF\u80FD\u6211\u4EEC\u53EA\u7528\u5728\u4E00\u4E2A\u7C7B\u5185\u7684\u51E0\u5341\u884C\u4EE3\u7801\u4E0A\u626B\u51E0\u773C\uFF0C\u5C31\u80FD\u5927\u6982\u77E5\u9053\u51FA\u73B0\u95EE\u9898\u7684\u539F\u56E0\u4E86\u3002\u4F46\u5982\u679C\u6D41\u7A0B\u4E2D\uFF0C\u4F7F\u7528\u5230\u4E86\u5927\u91CF\u201C\u5C01\u88C5\u3001\u62BD\u8C61\uFF0C\u7528\u6237\u65E0\u9700\u5173\u6CE8\u5E95\u5C42\u5B9E\u73B0\u903B\u8F91\u201D\u4F9D\u8D56\u5E93\uFF0C\u5730\u72F1\u7EA7\u4F53\u9A8C\u5C31\u6765\u4E86\u3002\u539F\u672C\u6211\u4EEC\u53EF\u80FD\u53EA\u9700\u8981\u4E00\u4E2A\u5C0F\u6570\u5341\u884C\u7684\u51FD\u6570\u5C31\u80FD\u5B9E\u73B0\u6240\u6709\u76F8\u5173\u903B\u8F91\u3002\u4F46\u5982\u679C\u57FA\u4E8E\u62BD\u8C61\u5E93\u53BB\u5B9E\u73B0\u76F8\u5173\u529F\u80FD\uFF0C\u6211\u4EEC\u5728\u95EE\u9898\u6392\u67E5\u65F6\uFF0C\u53EF\u80FD\u8981\u67E5\u770B\u7684\u4EE3\u7801\u53EF\u80FD\u662FA\u62BD\u8C61\u7C7B(A1,A2,A3...)\u7C7B-&gt;B\u62BD\u8C61\u7C7B(B1,B2,B3...)-&gt;C\u62BD\u8C61\u7C7B(C1,C2,C3...)-&gt;...\uFF0C\u5728\u6570\u5341\u4E2A\u7C7B\u3001\u6570\u5341\u4E2A\u65B9\u6CD5\u95F4\u8DF3\u8F6C\uFF0C\u5E76\u8FDB\u884C\u63A8\u7406\u3002\u5176\u4E2D\u6700\u5178\u578B\u7684\u5BF9\u7167\u4F8B\u5B50\u5C31\u662F\uFF1ATurms\u7684<code>im.turms.gateway.access.websocket.factory.WebSocketFactory#getHttpRequestHandler</code>\u5728\u4E00\u4E2A\u5C0F\u6570\u5341\u884C\u7684\u51FD\u6570\u5185\u5B9E\u73B0\u4E86\u4E00\u7EC4WebSocket\u63E1\u624B\u903B\u8F91\u3002\u4F46\u5982\u679C\u8FD9\u5957\u903B\u8F91\u8BA9Spring\u6765\u5B9E\u73B0\uFF0C\u5B83\u4F1A\u5C06\u5404\u4E2A\u4E0D\u540C\u5305\u4E0B\u7684\u7C7B\uFF0C\u5404\u79CD\u903B\u8F91\u4E1C\u62FC\u897F\u51D1\u5730\u6DF7\u5728\u4E00\u8D77\uFF0C\u5728\u95EE\u9898\u6392\u67E5\u65F6\uFF0C\u5982\u679C\u8FD8\u4F34\u968F\u7740\u4E00\u4E9B\u9700\u8981\u624B\u52A8\u91CA\u653E\u7684\u5185\u5B58\uFF0C\u5730\u72F1\u7EA7\u7684\u95EE\u9898\u6392\u67E5\u4F53\u9A8C\u5C31\u6765\u4E86\u3002</p></li><li><p>\u90E8\u5206\u4F9D\u8D56\u5E93\u5728\u4E00\u4E9B\u5730\u65B9\u4F1A\u81EA\u884CSuppress\u5F02\u5E38\uFF0C\u4E0A\u5C42\u5E94\u7528\u4EE3\u7801\u65E0\u6CD5\u611F\u77E5\u3002\u7531\u4E8E\u51FA\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u5E95\u5C42\u5E93\u4EE3\u7801\u4E0E\u4E0A\u5C42\u5E94\u7528\u4EE3\u7801\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u662F\u8DD1\u5728\u4E0D\u540C\u7684\u6808\u4E0A\u7684\u3002\u9664\u975E\u5E95\u5C42\u4F9D\u8D56\u5E93\u652F\u6301\u5168\u5C40\u7684\u5F02\u5E38\u56DE\u8C03\uFF0C\u5426\u5219\u4E0A\u5C42\u5E94\u7528\u751A\u81F3\u65E0\u6CD5\u611F\u77E5\u5F02\u5E38\u7684\u53D1\u751F\u3002\u5BF9\u4E8E\u4E00\u4E9BTrivial\u7EA7\u522B\u7684\u9519\u8BEF\uFF0C\u4E0A\u5C42\u5E94\u7528\u611F\u77E5\u4E0D\u5230\u4E5F\u6CA1\u5173\u7CFB\u3002\u4F46\u5982\u679C\u662F\u4E00\u4E9B\u4E0A\u5C42\u5E94\u7528\u975E\u5E38\u5173\u6CE8\u7684\u5F02\u5E38\uFF08\u5982RPC\u7684TCP\u8FDE\u63A5\u7684\u5F02\u5E38\u65AD\u5F00\uFF09\uFF0C\u8FD9\u5C06\u662F\u5F15\u53D1\u6574\u4E2A\u7CFB\u7EDF\u5F02\u5E38\u4E0E\u5931\u5E8F\u7684\u5BFC\u706B\u7D22\u4E86\u3002</p></li><li><p>\u90E8\u5206\u77E5\u540D\u4F9D\u8D56\u5E93\u7684\u5F00\u53D1\u4EBA\u5458\u751A\u81F3\u7F3A\u4E4F\u6700\u57FA\u672C\u7684\u5B89\u5168\u5E38\u8BC6\u3002\u6BD4\u5982<code>Log4j</code>\u7684\u5F00\u53D1\u4EBA\u5458\u7ADF\u7136\u6DFB\u52A0\u4EE3\u7801\u6765\u81EA\u52A8\u68C0\u6D4B\u9884\u5907\u6253\u5370\u7684\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5B58\u5728<code>${jndi}</code>\u6A21\u5F0F\uFF0C\u5982\u679C\u5B58\u5728\u5219\u8C03\u7528\u5BF9\u5E94\u7684JNDI\u670D\u52A1\uFF0C\u5E76\u9ED8\u8BA4\u5F00\u542F\u8BE5\u529F\u80FD\u3002\u4F5C\u4E3A\u4E13\u95E8\u7F16\u5199\u65E5\u5FD7\u4F9D\u8D56\u5E93\u7684\u5F00\u53D1\u4EBA\u5458\u7ADF\u7136\u5982\u6B64\u7F3A\u4E4F\u5B89\u5168\u5E38\u8BC6\uFF0C\u4E14\u8FD8\u901A\u8FC7\u4E86PR review\u3002</p></li></ul><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u81EA\u7814\u80FD\u89C4\u907F\u6389\u4E0A\u8FF0\u6240\u6709\u95EE\u9898\uFF0C\u5728\u63D0\u9AD8\u4EE3\u7801\u53EF\u63A7\u6027\u7684\u540C\u65F6\uFF0C\u4E5F\u6781\u5927\u5730\u964D\u4F4E\u4E86\u7814\u53D1\u96BE\u5EA6\u4E0E\u95EE\u9898\u6392\u67E5\u96BE\u5EA6\uFF0C\u5E76\u63D0\u5347\u4EE3\u7801\u6027\u80FD\u4E0E\u8D44\u6E90\u5229\u7528\u7387\u3002</p><p>\u7EFC\u4E0A\uFF0CTurms\u9879\u76EE\u5728\u5F15\u7528\u4E00\u4E2A\u7C7B\u5E93\u65F6\uFF0C\u901A\u5E38\u4E0D\u5F15\u5165\u62BD\u8C61\u5C01\u88C5\u5E93\uFF08\u5982Spring\uFF09\uFF0C\u800C\u4EC5\u5F15\u5165\u5B9E\u73B0\u5E93\u3002\u5BF9\u4F9D\u8D56\u5E93\u4E2D\u9700\u8981\u6027\u80FD\u4F18\u5316\u6216\u903B\u8F91\u4F18\u5316\u7684\u70B9\uFF0C\u4F1A\u76F4\u63A5\u5728Turms\u9879\u76EE\u5185\u90E8\u8FDB\u884C\u91CD\u6784\u3002\u7ED3\u5408\u8003\u8651\u5230\u81EA\u7814\u7684\u96BE\u6613\u7A0B\u5EA6\u4E0E\u4EE3\u7801\u53EF\u63A7\u6027\uFF0C\u6211\u4EEC\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u4F1A\u5C3D\u53EF\u80FD\u9009\u62E9\u81EA\u7814\u3002</p><p>\u8865\u5145\uFF1A</p><ul><li><p>\u5982\u679C\u79FB\u9664Spring\u6846\u67B6\uFF0C\u5C31\u80FD\u8BA9Controller\u5C42\u7684\u5B9E\u73B0\u53D8\u5F97\u975E\u5E38\u6E05\u6670\u3001\u4E14\u5B9E\u73B0\u9AD8\u6548\uFF08\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5C06Response\u6570\u636E\u5199\u5165DirectByteBuf\uFF0C\u907F\u514D\u65E0\u610F\u4E49\u7684\u5806\u5185\u5B58\u62F7\u8D1D\uFF09\uFF0C\u4E5F\u80FD\u8BA9\u4EE3\u7801\u53D8\u5F97\u975E\u5E38\u53EF\u63A7\u3002\u5177\u4F53\u800C\u8A00\uFF0CTurms\u7684\u65E5\u5FD7\u5B9E\u73B0\u9700\u8981\u8BFB\u53D6\u7528\u6237\u914D\u7F6E\uFF0C\u800C\u8BFB\u53D6\u7528\u6237\u914D\u7F6E\u8981\u5148\u7B49Spring\u52A0\u8F7D\u5B8C\u7528\u6237\u914D\u7F6E\uFF0C\u800CSpring\u5728\u52A0\u8F7D\u7528\u6237\u914D\u7F6E\u4E4B\u524D\u53C8\u4F1A\u6253\u65E5\u5FD7\uFF0C\u56E0\u6B64\u8FD9\u91CC\u6709\u4E2A\u5FAA\u73AF\u4F9D\u8D56\u7684\u95EE\u9898\uFF0C\u800C\u6211\u4EEC\u4E0D\u5F97\u4E0D\u901A\u8FC7\u4E00\u4E9B\u8FC2\u56DE\u624B\u6BB5\u53BB\u907F\u514DSpring\u52A0\u8F7D\u5B8C\u914D\u7F6E\u524D\u6253\u5370\u65E5\u5FD7\u3002</p><p>\u4F46\u6211\u4EEC\u4E4B\u6240\u4EE5\u76EE\u524D\u8FD8\u6CA1\u79FB\u9664Spring\u6846\u67B6\uFF0C\u662F\u56E0\u4E3A\u4ECE\u96F6\u5199\u4E00\u5957Controller/JSON\u5E8F\u5217\u5316/\u81EA\u52A8\u751F\u6210Swagger API\u6587\u6863/Actuator/IoC/\u914D\u7F6E\u8BFB\u53D6\u5B9E\u73B0\u5E76\u9002\u914D\uFF0C\u4F30\u8BA1\u9700\u8981\u4E24\u5468\u81F3\u4E09\u5468\u65F6\u95F4\uFF0C\u800C\u8FD9\u4E48\u957F\u7684\u65F6\u95F4\u8DB3\u591F\u6211\u4EEC\u505AIM\u7CFB\u7EDF\u4E2D\u5F88\u591A\u66F4\u4E3A\u91CD\u8981\u7684\u4F18\u5316\u4E0E\u7279\u6027\uFF0C\u4E14Admin API\u76F8\u6BD4\u5BA2\u6237\u7AEFAPI\u5E76\u4E0D\u662F\u90A3\u4E48\u5728\u610F\u6027\u80FD\u4E0E\u53EF\u7EF4\u62A4\u6027\uFF0C\u56E0\u6B64\u76EE\u524D\u53EA\u662F\u5BF9Spring\u76F8\u5173\u7684\u4F4E\u6548\u5B9E\u73B0\u8FDB\u884C\u4E86\u91CD\u6784\uFF0C\u7B49\u91CD\u8981\u7684IM\u7CFB\u7EDF\u4F18\u5316\u90FD\u5B8C\u6210\u540E\u518D\u6765\u79FB\u9664\u6574\u4E2ASpring\u3002</p><p>\u800C\u5728\u79FB\u9664Spring\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u80FD\u4FDD\u8BC1Turms\u670D\u52A1\u7AEF\u80FD\u591F\u4E3B\u52A8\u5730\u7EDF\u7B79\u6240\u6709\u4EE3\u7801\uFF0C\u5373\u6240\u6709\u4EE3\u7801\u90FD\u4E3ATurms\u670D\u52A1\uFF0C\u800C\u4E0D\u662FTurms\u8981\u53BB\u9002\u914D\u5176\u4ED6\u6846\u67B6\u7684\u4EE3\u7801\u3002</p></li><li><p>Turms\u5728\u6574\u4E2AJava\u751F\u6001\u4E2D\uFF0C\u552F\u4E00\u4FE1\u4EFB\u7684\u4F9D\u8D56\u662F\uFF1ANetty</p></li></ul>',31);function o(d,c){return a}var l=e(i,[["render",o]]);export{l as default};
