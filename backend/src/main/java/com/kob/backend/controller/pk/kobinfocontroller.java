package com.kob.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/pk/")
public class kobinfocontroller {
    @RequestMapping("getbotinfo/")
    public List<Map<String,String>> getBotInfo() {
        List<Map<String,String>> list=new LinkedList<>();
        Map<String,String> bot1=new HashMap<>();
        bot1.put("name","tiger");
        bot1.put("rating","1500");
        Map<String,String> bot2=new HashMap<>();
        bot2.put("name","tig");
        bot2.put("rating","100");
        list.add(bot1);
        list.add(bot2);
        return list;
    }
}
