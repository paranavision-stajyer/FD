<%@page contentType="text/html;charset=UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<HTML>
<HEAD>
<TITLE>Result</TITLE>
</HEAD>
<BODY>
<H1>Result</H1>

<jsp:useBean id="sampleIService1Proxyid" scope="session" class="org.tempuri.IService1Proxy" />
<%
if (request.getParameter("endpoint") != null && request.getParameter("endpoint").length() > 0)
sampleIService1Proxyid.setEndpoint(request.getParameter("endpoint"));
%>

<%
String method = request.getParameter("method");
int methodID = 0;
if (method == null) methodID = -1;

if(methodID != -1) methodID = Integer.parseInt(method);
boolean gotMethod = false;

try {
switch (methodID){ 
case 2:
        gotMethod = true;
        java.lang.String getEndpoint2mtemp = sampleIService1Proxyid.getEndpoint();
if(getEndpoint2mtemp == null){
%>
<%=getEndpoint2mtemp %>
<%
}else{
        String tempResultreturnp3 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getEndpoint2mtemp));
        %>
        <%= tempResultreturnp3 %>
        <%
}
break;
case 5:
        gotMethod = true;
        String endpoint_0id=  request.getParameter("endpoint8");
            java.lang.String endpoint_0idTemp = null;
        if(!endpoint_0id.equals("")){
         endpoint_0idTemp  = endpoint_0id;
        }
        sampleIService1Proxyid.setEndpoint(endpoint_0idTemp);
break;
case 10:
        gotMethod = true;
        org.tempuri.IService1 getIService110mtemp = sampleIService1Proxyid.getIService1();
if(getIService110mtemp == null){
%>
<%=getIService110mtemp %>
<%
}else{
        if(getIService110mtemp!= null){
        String tempreturnp11 = getIService110mtemp.toString();
        %>
        <%=tempreturnp11%>
        <%
        }}
break;
case 13:
        gotMethod = true;
        String userName_1id=  request.getParameter("userName16");
            java.lang.String userName_1idTemp = null;
        if(!userName_1id.equals("")){
         userName_1idTemp  = userName_1id;
        }
        String password_2id=  request.getParameter("password18");
            java.lang.String password_2idTemp = null;
        if(!password_2id.equals("")){
         password_2idTemp  = password_2id;
        }
        String name_3id=  request.getParameter("name20");
            java.lang.String name_3idTemp = null;
        if(!name_3id.equals("")){
         name_3idTemp  = name_3id;
        }
        String surname_4id=  request.getParameter("surname22");
            java.lang.String surname_4idTemp = null;
        if(!surname_4id.equals("")){
         surname_4idTemp  = surname_4id;
        }
        String mailAdress_5id=  request.getParameter("mailAdress24");
            java.lang.String mailAdress_5idTemp = null;
        if(!mailAdress_5id.equals("")){
         mailAdress_5idTemp  = mailAdress_5id;
        }
        String address_6id=  request.getParameter("address26");
            java.lang.String address_6idTemp = null;
        if(!address_6id.equals("")){
         address_6idTemp  = address_6id;
        }
        String phone_7id=  request.getParameter("phone28");
            java.lang.String phone_7idTemp = null;
        if(!phone_7id.equals("")){
         phone_7idTemp  = phone_7id;
        }
        java.lang.String signUp13mtemp = sampleIService1Proxyid.signUp(userName_1idTemp,password_2idTemp,name_3idTemp,surname_4idTemp,mailAdress_5idTemp,address_6idTemp,phone_7idTemp);
if(signUp13mtemp == null){
%>
<%=signUp13mtemp %>
<%
}else{
        String tempResultreturnp14 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(signUp13mtemp));
        %>
        <%= tempResultreturnp14 %>
        <%
}
break;
case 30:
        gotMethod = true;
        String userName_8id=  request.getParameter("userName33");
            java.lang.String userName_8idTemp = null;
        if(!userName_8id.equals("")){
         userName_8idTemp  = userName_8id;
        }
        String password_9id=  request.getParameter("password35");
            java.lang.String password_9idTemp = null;
        if(!password_9id.equals("")){
         password_9idTemp  = password_9id;
        }
        java.lang.String signIn30mtemp = sampleIService1Proxyid.signIn(userName_8idTemp,password_9idTemp);
if(signIn30mtemp == null){
%>
<%=signIn30mtemp %>
<%
}else{
        String tempResultreturnp31 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(signIn30mtemp));
        %>
        <%= tempResultreturnp31 %>
        <%
}
break;
case 37:
        gotMethod = true;
        String userName_10id=  request.getParameter("userName40");
            java.lang.String userName_10idTemp = null;
        if(!userName_10id.equals("")){
         userName_10idTemp  = userName_10id;
        }
        String password_11id=  request.getParameter("password42");
            java.lang.String password_11idTemp = null;
        if(!password_11id.equals("")){
         password_11idTemp  = password_11id;
        }
        String assyName_12id=  request.getParameter("assyName44");
            java.lang.String assyName_12idTemp = null;
        if(!assyName_12id.equals("")){
         assyName_12idTemp  = assyName_12id;
        }
        java.lang.String getAssyXML37mtemp = sampleIService1Proxyid.getAssyXML(userName_10idTemp,password_11idTemp,assyName_12idTemp);
if(getAssyXML37mtemp == null){
%>
<%=getAssyXML37mtemp %>
<%
}else{
        String tempResultreturnp38 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(getAssyXML37mtemp));
        %>
        <%= tempResultreturnp38 %>
        <%
}
break;
case 46:
        gotMethod = true;
        String userName_13id=  request.getParameter("userName49");
            java.lang.String userName_13idTemp = null;
        if(!userName_13id.equals("")){
         userName_13idTemp  = userName_13id;
        }
        String password_14id=  request.getParameter("password51");
            java.lang.String password_14idTemp = null;
        if(!password_14id.equals("")){
         password_14idTemp  = password_14id;
        }
        String assyName_15id=  request.getParameter("assyName53");
            java.lang.String assyName_15idTemp = null;
        if(!assyName_15id.equals("")){
         assyName_15idTemp  = assyName_15id;
        }
        java.lang.String deleteAssy46mtemp = sampleIService1Proxyid.deleteAssy(userName_13idTemp,password_14idTemp,assyName_15idTemp);
if(deleteAssy46mtemp == null){
%>
<%=deleteAssy46mtemp %>
<%
}else{
        String tempResultreturnp47 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(deleteAssy46mtemp));
        %>
        <%= tempResultreturnp47 %>
        <%
}
break;
case 55:
        gotMethod = true;
        String userName_16id=  request.getParameter("userName58");
            java.lang.String userName_16idTemp = null;
        if(!userName_16id.equals("")){
         userName_16idTemp  = userName_16id;
        }
        String password_17id=  request.getParameter("password60");
            java.lang.String password_17idTemp = null;
        if(!password_17id.equals("")){
         password_17idTemp  = password_17id;
        }
        String assyName_18id=  request.getParameter("assyName62");
            java.lang.String assyName_18idTemp = null;
        if(!assyName_18id.equals("")){
         assyName_18idTemp  = assyName_18id;
        }
        String partName_19id=  request.getParameter("partName64");
            java.lang.String partName_19idTemp = null;
        if(!partName_19id.equals("")){
         partName_19idTemp  = partName_19id;
        }
        java.lang.String deletePart55mtemp = sampleIService1Proxyid.deletePart(userName_16idTemp,password_17idTemp,assyName_18idTemp,partName_19idTemp);
if(deletePart55mtemp == null){
%>
<%=deletePart55mtemp %>
<%
}else{
        String tempResultreturnp56 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(deletePart55mtemp));
        %>
        <%= tempResultreturnp56 %>
        <%
}
break;
case 66:
        gotMethod = true;
        String userName_20id=  request.getParameter("userName69");
            java.lang.String userName_20idTemp = null;
        if(!userName_20id.equals("")){
         userName_20idTemp  = userName_20id;
        }
        String password_21id=  request.getParameter("password71");
            java.lang.String password_21idTemp = null;
        if(!password_21id.equals("")){
         password_21idTemp  = password_21id;
        }
        String assyName_22id=  request.getParameter("assyName73");
            java.lang.String assyName_22idTemp = null;
        if(!assyName_22id.equals("")){
         assyName_22idTemp  = assyName_22id;
        }
        String partName_23id=  request.getParameter("partName75");
            java.lang.String partName_23idTemp = null;
        if(!partName_23id.equals("")){
         partName_23idTemp  = partName_23id;
        }
        java.lang.String addPart66mtemp = sampleIService1Proxyid.addPart(userName_20idTemp,password_21idTemp,assyName_22idTemp,partName_23idTemp);
if(addPart66mtemp == null){
%>
<%=addPart66mtemp %>
<%
}else{
        String tempResultreturnp67 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(addPart66mtemp));
        %>
        <%= tempResultreturnp67 %>
        <%
}
break;
case 77:
        gotMethod = true;
        String userName_24id=  request.getParameter("userName80");
            java.lang.String userName_24idTemp = null;
        if(!userName_24id.equals("")){
         userName_24idTemp  = userName_24id;
        }
        String password_25id=  request.getParameter("password82");
            java.lang.String password_25idTemp = null;
        if(!password_25id.equals("")){
         password_25idTemp  = password_25id;
        }
        String assyName_26id=  request.getParameter("assyName84");
            java.lang.String assyName_26idTemp = null;
        if(!assyName_26id.equals("")){
         assyName_26idTemp  = assyName_26id;
        }
        String partName_27id=  request.getParameter("partName86");
            java.lang.String partName_27idTemp = null;
        if(!partName_27id.equals("")){
         partName_27idTemp  = partName_27id;
        }
        String width_28id=  request.getParameter("width88");
            java.lang.Double width_28idTemp = null;
        if(!width_28id.equals("")){
         width_28idTemp  = java.lang.Double.valueOf(width_28id);
        }
        String height_29id=  request.getParameter("height90");
            java.lang.Double height_29idTemp = null;
        if(!height_29id.equals("")){
         height_29idTemp  = java.lang.Double.valueOf(height_29id);
        }
        String thickness_30id=  request.getParameter("thickness92");
            java.lang.Double thickness_30idTemp = null;
        if(!thickness_30id.equals("")){
         thickness_30idTemp  = java.lang.Double.valueOf(thickness_30id);
        }
        String stripThickness_31id=  request.getParameter("stripThickness94");
            java.lang.Double stripThickness_31idTemp = null;
        if(!stripThickness_31id.equals("")){
         stripThickness_31idTemp  = java.lang.Double.valueOf(stripThickness_31id);
        }
        String material_32id=  request.getParameter("material96");
            java.lang.Integer material_32idTemp = null;
        if(!material_32id.equals("")){
         material_32idTemp  = java.lang.Integer.valueOf(material_32id);
        }
        String stripes_33id=  request.getParameter("stripes98");
            java.lang.String stripes_33idTemp = null;
        if(!stripes_33id.equals("")){
         stripes_33idTemp  = stripes_33id;
        }
        String direction_34id=  request.getParameter("direction100");
            java.lang.Integer direction_34idTemp = null;
        if(!direction_34id.equals("")){
         direction_34idTemp  = java.lang.Integer.valueOf(direction_34id);
        }
        java.lang.String updatePart77mtemp = sampleIService1Proxyid.updatePart(userName_24idTemp,password_25idTemp,assyName_26idTemp,partName_27idTemp,width_28idTemp,height_29idTemp,thickness_30idTemp,stripThickness_31idTemp,material_32idTemp,stripes_33idTemp,direction_34idTemp);
if(updatePart77mtemp == null){
%>
<%=updatePart77mtemp %>
<%
}else{
        String tempResultreturnp78 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(updatePart77mtemp));
        %>
        <%= tempResultreturnp78 %>
        <%
}
break;
case 102:
        gotMethod = true;
        String userName_35id=  request.getParameter("userName105");
            java.lang.String userName_35idTemp = null;
        if(!userName_35id.equals("")){
         userName_35idTemp  = userName_35id;
        }
        String password_36id=  request.getParameter("password107");
            java.lang.String password_36idTemp = null;
        if(!password_36id.equals("")){
         password_36idTemp  = password_36id;
        }
        String assyName_37id=  request.getParameter("assyName109");
            java.lang.String assyName_37idTemp = null;
        if(!assyName_37id.equals("")){
         assyName_37idTemp  = assyName_37id;
        }
        String joiningPart_38id=  request.getParameter("joiningPart111");
            java.lang.String joiningPart_38idTemp = null;
        if(!joiningPart_38id.equals("")){
         joiningPart_38idTemp  = joiningPart_38id;
        }
        String joinedPart_39id=  request.getParameter("joinedPart113");
            java.lang.String joinedPart_39idTemp = null;
        if(!joinedPart_39id.equals("")){
         joinedPart_39idTemp  = joinedPart_39id;
        }
        String joiningFaces_40id=  request.getParameter("joiningFaces115");
            java.lang.String joiningFaces_40idTemp = null;
        if(!joiningFaces_40id.equals("")){
         joiningFaces_40idTemp  = joiningFaces_40id;
        }
        String joinedFaces_41id=  request.getParameter("joinedFaces117");
            java.lang.String joinedFaces_41idTemp = null;
        if(!joinedFaces_41id.equals("")){
         joinedFaces_41idTemp  = joinedFaces_41id;
        }
        String distances_42id=  request.getParameter("distances119");
            java.lang.String distances_42idTemp = null;
        if(!distances_42id.equals("")){
         distances_42idTemp  = distances_42id;
        }
        java.lang.String addJoin102mtemp = sampleIService1Proxyid.addJoin(userName_35idTemp,password_36idTemp,assyName_37idTemp,joiningPart_38idTemp,joinedPart_39idTemp,joiningFaces_40idTemp,joinedFaces_41idTemp,distances_42idTemp);
if(addJoin102mtemp == null){
%>
<%=addJoin102mtemp %>
<%
}else{
        String tempResultreturnp103 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(addJoin102mtemp));
        %>
        <%= tempResultreturnp103 %>
        <%
}
break;
case 121:
        gotMethod = true;
        String userName_43id=  request.getParameter("userName124");
            java.lang.String userName_43idTemp = null;
        if(!userName_43id.equals("")){
         userName_43idTemp  = userName_43id;
        }
        String password_44id=  request.getParameter("password126");
            java.lang.String password_44idTemp = null;
        if(!password_44id.equals("")){
         password_44idTemp  = password_44id;
        }
        String assyName_45id=  request.getParameter("assyName128");
            java.lang.String assyName_45idTemp = null;
        if(!assyName_45id.equals("")){
         assyName_45idTemp  = assyName_45id;
        }
        java.lang.String addAssy121mtemp = sampleIService1Proxyid.addAssy(userName_43idTemp,password_44idTemp,assyName_45idTemp);
if(addAssy121mtemp == null){
%>
<%=addAssy121mtemp %>
<%
}else{
        String tempResultreturnp122 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(addAssy121mtemp));
        %>
        <%= tempResultreturnp122 %>
        <%
}
break;
case 130:
        gotMethod = true;
        String name_46id=  request.getParameter("name133");
            java.lang.String name_46idTemp = null;
        if(!name_46id.equals("")){
         name_46idTemp  = name_46id;
        }
        java.lang.String echo130mtemp = sampleIService1Proxyid.echo(name_46idTemp);
if(echo130mtemp == null){
%>
<%=echo130mtemp %>
<%
}else{
        String tempResultreturnp131 = org.eclipse.jst.ws.util.JspUtils.markup(String.valueOf(echo130mtemp));
        %>
        <%= tempResultreturnp131 %>
        <%
}
break;
}
} catch (Exception e) { 
%>
Exception: <%= org.eclipse.jst.ws.util.JspUtils.markup(e.toString()) %>
Message: <%= org.eclipse.jst.ws.util.JspUtils.markup(e.getMessage()) %>
<%
return;
}
if(!gotMethod){
%>
result: N/A
<%
}
%>
</BODY>
</HTML>