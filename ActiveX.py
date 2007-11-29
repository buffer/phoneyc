#!/usr/bin/env python

import os

class ActiveX(object):
    def __init__(self):
        self.clsid = {}
        self.clsid['6EEFD7B1-B26C-440D-B55A-1EC677189F30'] = SonicWallNetExtenderAddRouteEntry()
        self.clsid['8D1636FD-CA49-4B4E-90E4-0A20E03A15E8'] = JetAudioDownloadFromMusicStore()
        self.clsid['D5184A39-CBDF-4A4F-AC1A-7A45A852C883'] = YahooMessengerYVerInfo()
        self.clsid['A47D5315-321D-4DEE-9DB3-18438023193B'] = NessusScanCtrl()
        self.clsid['3E1DD897-F300-486C-BEAF-711183773554'] = NeoTracePro()
        # same lib with different CLSIDs?
        self.clsid['9D39223E-AE8E-11D4-8FD3-00D0B7730277'] = YahooMessengerYwcvwr()
        self.clsid['DCE2F8B1-A520-11D4-8FD0-00D0B7730277'] = YahooMessengerYwcvwr()
        self.clsid['7EC7B6C5-25BD-4586-A641-D2ACBB6629DD'] = YahooMessengerYwcvwr()
        self.clsid['24F3EAD6-8B87-4C1A-97DA-71C126BDA08F'] = YahooMessengerCyft()
     
        self.clsid['7F5E27CE-4A5C-11D3-9232-0000B48A05B2'] = SSReaderPdg2()
        self.clsid['A09AE68F-B14D-43ED-B713-BA413F034904'] = WinZip()
        #self.clsid['9BE8D7B2-329C-442A-A4AC-ABA9D7572602'] = McAfeeScan()
        self.clsid['F3E70CEA-956E-49CC-B444-73AFE593AD7F'] = PPlayer()
        self.clsid['EEDD6FF9-13DE-496B-9A1C-D78B3215E266'] = PPlayer()
        self.clsid['5EC7C511-CD0F-42E6-830C-1BD9882F3458'] = PPlayer()
        self.clsid['D27CDB6E-AE6D-11CF-96B8-444553540000'] = Flash()
        self.clsid['6BE52E1D-E586-474F-A6E2-1A85A9B4D9FB'] = PPStream()
        self.clsid['FDC7A535-4070-4B92-A0EA-D9994BCC0DC5'] = RealPlayer()
        self.clsid['5D86DDB5-BDF9-441B-9E9E-D4730F4EE499'] = BitDefender()

        self.clsname = {}
        self.clsname['WebViewFolderIcon.WebViewFolderIcon.1'] = WebViewFolderIcon()
        self.clsname['WZFILEVIEW.FileViewCtrl.61'] = WinZip()
        self.clsname['rfcguisink.rfcguisink.1'] = EnjoySAP()
        self.clsname['kweditcontrol.kwedit.1'] = EnjoySAP()
        self.clsname['PPlayer.XPPlayer.1'] = PPlayer()
        self.clsname['IERPCTL.IERPCTL'] = RealPlayer()
        self.clsname['IERPCTL.IERPCTL.1'] = RealPlayer()

        # set up the pure JScript version
        self.allobj = {}
        self.allobj.update(self.clsid)
        self.allobj.update(self.clsname)

        self.js_body = ''
        self.js_body += '\n//alerts for the honeyclient\n'
        self.js_body += 'var page_alerts = new Array();\n'
        self.js_body += 'function add_alert(arg) { if (page_alerts.indexOf(arg) == -1) {page_alerts.push(arg);}}\n'
        for v in self.allobj.values():
            self.js_body += "\n%s" % v.js_src

        self.js_body += "\n\nfunction ActiveXObject(s) {"
        self.js_body += "\n\tthis.ActiveX = new Array();"

        for k, v in self.allobj.iteritems():
            self.js_body += "\n\tthis.ActiveX['%s'] = new %s();" % (k.upper(), v.classname)

        self.js_body += "\n\n\treturn(this.ActiveX[s.toUpperCase()]);\n}\n"

    def get_obj_by_clsid(self, clsid):
        return self.clsid.get(clsid, False)

    def get_obj_by_clsname(self, clsname):
        return self.clsname.get(name, False)

    def load_js_src(self, fname):
        fname = os.path.join('modules/jscript', fname)
        f = open(fname, 'r')
        r = f.read()
        f.close()
        return r

class SonicWallNetExtenderAddRouteEntry(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('SonicWall_CVE_2007_5603.js')
        self.classname = 'NELaunchCtrl'
        self.cve_id = ('CVE-2007-5603', )
        self.description = 'SonicWall SSL-VPN NetExtender NELaunchCtrl ActiveX control'
    
class JetAudioDownloadFromMusicStore(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('JetAudio_CVE_2007_4983.js')
        self.classname = 'JetAudio'
        self.cvs_id = ('CVE-2007-4983', )
        self.description = 'jetAudio 7.x ActiveX DownloadFromMusicStore() Remote Code Execution'

class YahooMessengerYVerInfo(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('Yahoo_CVE_2007_4515.js')
        self.classname = 'YahooYVerInfo'
        self.cve_id = ('CVE-2007-4515', )
        self.description = 'Yahoo Messenger YVerInfo.dll ActiveX Multiple Remote Buffer Overflow'

class NessusScanCtrl(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('Nessus_ScanCtrl_CVE_2007_4061.js')
        self.classname = 'ScanCtrl'
        self.cve_id = ('CVE-2007-4061', 'CVE-2007-4062', 'CVE-2007-4031',)
        self.description = 'Nessus Vulnerability Scanner ScanCtrl ActiveX Control'

class NeoTracePro(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('NeoTracePro_CVE_2006_6707.js')
        self.classname = 'NeoTracePro'
        self.cve_id = ('CVE-2006-6707', )
        self.description = 'NeoTraceExplorer.NeoTraceLoader ActiveX control (NeoTraceExplorer.dll)'

class YahooMessengerYwcvwr(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('Yahoo_CVE_2007_4391.js')
        self.classname = 'YahooYwcvwr'
        self.cve_id = ('CVE-2007-4391', )
        self.description = 'Yahoo! Messenger Webcam JPEG 2000 ActiveX Control'

class SSReaderPdg2(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('SSReader_CVE_2007_5892.js')
        self.classname = 'SSReaderPdg2'
        self.cve_id = ('CVE-2007-5892', )
        self.description = 'SSReader 4.0 pdg2.dll ActiveX Control'

class WebViewFolderIcon(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('WebViewFolderIcon_CVE_2006_3730.js')
        self.classname = 'WebViewFolderIcon'
        self.cve_id = ('CVE-2006-3730', )
        self.description = 'Microsoft Internet Explorer 6 WebViewFolderIcon ActiveX object'

class WinZip(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('WinZip_CVE_2006_5198.js')
        self.classname = 'WinZipFileView'
        self.cve_id = ('CVE-2006-5198', 'CVE-2006-3890', )
        self.description = 'WinZip WZFileView.FileViewCtrl.61 ActiveX Control'

class McAfeeScan(ActiveX):
    # http://www.milw0rm.com/exploits/3890
    # todo, VBS/Py code
    def __init__(self):
        self.js_src = self.load_js_src('McAfeeScan.js')
        self.classname = 'McAfeeScan'
        self.cve_id = ()
        self.description = 'Mc Afee Viruscan ActiveX Control'
        
class EnjoySAP(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('EnjoySAP.js')
        self.classname = 'EnjoySAP'
        self.cve_id = ('CVE-2007-3606', )
        self.description = 'EnjoySAP ActiveX Control'

class PPlayer(ActiveX):
    # http://www.sebug.net/exploit/2575
    def __init__(self):
        self.js_src = self.load_js_src('PPlayer.js')
        self.classname = 'PPlayer'
        self.cve_id = ('CVE-NOMATCH', 'CVE-2007-5064', )
        self.description = 'Xunlei Thunder ActiveX Control'

class Flash(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('Flash.js')
        self.classname = 'Flash'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'Adobe Flash Player'

class PPStream(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('PPStream.js')
        self.classname = 'PPStream'
        self.cve_id = ('CVE-NOMATCH', '')
        self.description = 'PPStream (PowerPlayer.dll 2.0.1.3829) ActiveX Control'

class RealPlayer(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('RealPlayer.js')
        self.classname = 'RealPlayer'
        self.cve_id = ('CVE-NOMATCH', '')
        self.description = 'RealMedia RealPlayer Ierpplug.DLL ActiveX Control'

class YahooMessengerCyft(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('YahooCytf.js')
        self.classname = 'YahooCytf'
        self.cve_id = ('CVE-NOMATCH', )
        self.description = 'Yahoo! Messenger 8.1.0.421 CYFT Object (ft60.dll) ActiveX Control'

class BitDefender(ActiveX):
    def __init__(self):
        self.js_src = self.load_js_src('BitDefender.js')
        self.classname = 'BitDefender'
        self.cve_id = ('CVE-2007-5775', )
        self.descriptin = 'BitDefender Online Scanner ActiveX Control'
