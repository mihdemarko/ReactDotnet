using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}